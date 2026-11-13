import { useState } from "react";
export function AppCount() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>カウンター : {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -1
      </button>
      <Children
        names={["利都", "咲良", "音叶"]}
        age={[20, 21, 0]}
        skill={["HTML/CSS/JS", "React/Node.js", "TypeScript/Next.js"]}
      />
    </>
  );
}
function Children({ names, age, skill }) {
  const hobby = ["プログラミン", "お菓子作り", "ミルク飲み"];
  return (
    <>
      {names.map((name, index) => {
        return (
          <p key={index}>
            {name}/{age[index]}歳/{hobby[index]}
            {skill[index]}
          </p>
        );
      })}
    </>
  );
}

export function LiveTextPreview() {
  const [value, setValue] = useState("");
  function handleChange(e) {
    return setValue(e.target.value);
  }
  return (
    <>
      <input
        type="text"
        placeholder="入力して下さい"
        onChange={handleChange}
      ></input>
      {value}
    </>
  );
}

export function TextCounter() {
  const [value, setValue] = useState("");
  function handleChange(e) {
    if (e.target.value.trim() === "") {
      setValue("");
      return;
    }
    return setValue(e.target.value.replace(/[ 　]/g, ""));
  }
  return (
    <>
      <h2>リアルタイム文字数カウンター</h2>
      <input
        type="text"
        placeholder="入力できます"
        onChange={handleChange}
      ></input>
      {value.trim() === "" && <p>入力してくれ</p>}
      {value}
      <p>文字数 : {value.length}</p>
    </>
  );
}

function Header() {
  return <h2>アカウントにログインしてください</h2>;
}

function LoginForm() {
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  function handleChangeName(e) {
    setNameValue(e.target.value.replace(/[ 　]/g, ""));
  }
  function handleChangePassword(e) {
    setPasswordValue(e.target.value.replace(/[ 　]/g, ""));
  }
  return (
    <div className="login-container">
      <p>ユーザー名</p>
      <input
        placeholder="ユーザー名を入力してください"
        type="text"
        onChange={handleChangeName}
      ></input>
      {nameValue.trim() === "" && <p>ユーザー名を入力してください</p>}
      <p>パスワード</p>
      <input
        placeholder="パスワードを入力してください"
        type="password"
        onChange={handleChangePassword}
      ></input>
      {passwordValue.trim() === "" && <p>パスワードを入力してください</p>}
      {nameValue !== "" && passwordValue !== "" && <h3>入力完了</h3>}
    </div>
  );
}

function LoginPage() {
  return (
    <>
      <Header />
      <LoginForm />
    </>
  );
}

export default LoginPage;
