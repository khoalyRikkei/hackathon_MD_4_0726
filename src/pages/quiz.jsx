export default function Quiz({ data, onAnswer, index, countRender }) {
  return (
    <>
      {data && (
        <div>
          <h3>Số câu trả lời đúng: {countRender}</h3>
          <h1>{data.question}</h1>
          {data.answers.map((answer) => (
            <button
              style={{ margin: "0 20px" }}
              onClick={() => onAnswer(answer.isTrue, index)}
            >
              {answer.content}
            </button>
          ))}
          <h3>
            <button>Submit</button>
          </h3>
        </div>
      )}
    </>
  );
}
