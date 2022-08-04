import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "하건영",
    content: "hello1",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "김건영",
    content: "hello2",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "이건영",
    content: "hello3",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "박건영",
    content: "hello4",
    emotion: 3,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
