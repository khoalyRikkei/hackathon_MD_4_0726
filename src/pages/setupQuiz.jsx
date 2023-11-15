import { useEffect, useState } from "react";
import { getDataAPI, getQuestionByCondition } from "../apis";
import Quiz from "./quiz";

export default function SetupQuize() {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({ category: 1, limit: 3, level: 1 });
  const [toggleQuestion, setToggleQuestion] = useState(false);

  const [question, setQuestion] = useState([]);
  const getCategory = async () => {
    try {
      const data = await getDataAPI("category");
      if (data) {
        setCategories(data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleSubmit = async () => {
    event.preventDefault();

    const data = await getQuestionByCondition("question", formData);

    if (data) {
      const newData = await data.map((item) =>
        getDataAPI(`question/${item.id}/answers`)
      );
      console.log(1, newData);
      Promise.all(newData)
        .then((result) => {
          const newQuestion = result.map((item, index) => ({
            question: item[0].question_content,
            answers: item.map((answer) => ({
              content: answer.answer_content,
              isTrue: answer.isTrue,
            })),
            isShow: index === 0 ? true : false,
            isUserAnswer: 0,
          }));
          console.log(1111, result);

          setQuestion(newQuestion);
          setToggleQuestion(true);
        })
        .catch((error) => {});
    }
  };

  const handleSubmitAnswer = (isTrue, index) => {
    console.log(isTrue, index);
    question[index].isUserAnswer = isTrue;
    question[index].isShow = false;
    question[index + 1].isShow = true;
    setQuestion([...question]);
  };
  return (
    <>
      {!toggleQuestion ? (
        <div className="container-setup">
          <div className="container-modal">
            <h1>Setup Quiz</h1>
            <form onSubmit={handleSubmit}>
              <div className="item">
                <div className="title">Số lượng câu hỏi</div>
                <input
                  name="limit"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="item">
                <div className="title">Category</div>
                <select
                  name="category"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="item">
                <div className="title">Category</div>
                <select
                  name="level"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  <option value="0">Easy</option>
                  <option value="1">Medium</option>
                  <option value="2">Hard</option>
                </select>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      ) : (
        question.map((item, index) => {
          const countTrue = question.reduce(
            (pre, data) => (data.isUserAnswer ? pre + 1 : pre),
            0
          );

          const renderCount = `${countTrue}/${question.length}`;
          console.log(22222, renderCount);
          return (
            item.isShow && (
              <Quiz
                data={item}
                onAnswer={handleSubmitAnswer}
                index={index}
                key={index}
                countRender={renderCount}
              />
            )
          );
        })
      )}
    </>
  );
}
