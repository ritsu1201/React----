import { useState, useRef } from "react";
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
  return (
    <div className="login-header">
      <h1 className="login-title">Welcome Back</h1>
      <p className="login-description">アカウントにログインしてください</p>
    </div>
  );
}

function LoginForm() {
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  function handleChangeName(e) {
    setNameValue(e.target.value);
  }

  function handleChangePassword(e) {
    setPasswordValue(e.target.value);
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <Header />
        <div className="form-group">
          <label className="form-label">ユーザー名</label>
          <input
            className="form-input"
            type="text"
            placeholder="ユーザー名を入力"
            value={nameValue}
            onChange={handleChangeName}
          />
          {nameValue.trim() === "" && (
            <p className="error-message">ユーザー名を入力してください</p>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">パスワード</label>
          <input
            className="form-input"
            type="password"
            placeholder="パスワードを入力"
            value={passwordValue}
            onChange={handleChangePassword}
          />
          {passwordValue.trim() === "" && (
            <p className="error-message">パスワードを入力してください</p>
          )}
        </div>

        <button
          className="login-button"
          disabled={nameValue.trim() === "" || passwordValue.trim() === ""}
        >
          Login
        </button>

        {nameValue.trim() !== "" && passwordValue.trim() !== "" && (
          <p className="success-message">入力完了！</p>
        )}
      </div>
    </div>
  );
}

export default function LoginPage() {
  return <LoginForm />;
}

export function AppTraining() {
  const [tasks, setTask] = useState([
    { id: 1, name: "利都", age: 20 },
    { id: 2, name: "咲良", age: 21 },
  ]);
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        表示
      </button>
      {show &&
        tasks.map(({ id, name }) => {
          return <div key={id}>{name}</div>;
        })}
    </>
  );
}

function PeopleHeader() {
  return (
    <>
      <h2>My PEOPLE</h2>
      <p>Your favorite people.</p>
    </>
  );
}

function AppPeople() {
  const [people, setPeople] = useState([
    { id: 1, name: "利都", age: 20 },
    { id: 2, name: "咲良", age: 21 },
    { id: 3, name: "太郎", age: 25 },
  ]);
  return (
    <>
      <h3>MEMBERS</h3>
      {people.map(({ id, name, age }) => {
        return (
          <div key={id}>
            0{id} {name} {age}years
            <p>
              <button
                onClick={() => {
                  setPeople(
                    people.map((people) => {
                      if (people.id === id) {
                        return { ...people, age: people.age + 1 };
                      }
                      return people;
                    }),
                  );
                }}
              >
                UPDATE
              </button>
              <button
                onClick={() => {
                  setPeople(
                    people.filter((people) => {
                      return people.id !== id;
                    }),
                  );
                }}
              >
                DELETE
              </button>
            </p>
          </div>
        );
      })}
      <h2>
        <button
          onClick={() => {
            setPeople([...people, { id: 4, name: "花子", age: 22 }]);
          }}
        >
          + ADD MEMBER
        </button>
      </h2>
    </>
  );
}

export function PeoplePage() {
  return (
    <>
      <PeopleHeader />
      <AppPeople />
    </>
  );
}

function BooksHeader() {
  return (
    <>
      <h2 className="book-header">MY BOOKS</h2>
    </>
  );
}
function AppBooks() {
  const [books, setBooks] = useState([
    { id: 1, title: "ONE PIECE", pages: 100 },
    { id: 2, title: "NARUTO", pages: 150 },
    { id: 3, title: "BLEACH", pages: 120 },
  ]);
  return (
    <>
      {books.map(({ id, title, pages }) => {
        return (
          <div key={id}>
            <p>
              0{id} {title} {pages} pages
            </p>
            <p> {pages >= 200 ? "Long" : "SHORT"}</p>
            <button
              onClick={() => {
                setBooks(
                  books.map((book) => {
                    if (book.id === id) {
                      return { ...book, pages: book.pages + 10 };
                    }
                    return book;
                  }),
                );
              }}
            >
              UPDATE
            </button>
            <button
              onClick={() => {
                setBooks(
                  books.filter((book) => {
                    return book.id !== id;
                  }),
                );
              }}
            >
              DELETE
            </button>
          </div>
        );
      })}
      {books.length === 0 && <p>本が登録されていません</p>}
      <button
        onClick={() => {
          setBooks([...books, { id: 4, title: "DRAGON BALL", pages: 200 }]);
        }}
      >
        + ADD BOOKS
      </button>
    </>
  );
}

export function BooksPage() {
  return (
    <>
      <BooksHeader />
      <AppBooks />
    </>
  );
}

function FitnessHeader() {
  return (
    <>
      <h2 className="fitness-header">MY FITNESS</h2>
    </>
  );
}

export function AppFitness() {
  const [workouts, setWorkouts] = useState([
    { id: 1, name: "BENCH PRESS", weight: 60, completed: true },
    { id: 2, name: "SQUAT", weight: 80, completed: false },
    { id: 3, name: "LAT PULLDOWN", weight: 45, completed: true },
  ]);
  return (
    <>
      <FitnessHeader />
      {workouts.map(({ id, name, weight, completed }) => {
        return (
          <div key={id}>
            0{id} {name} {weight}kg
            <p>{completed === true ? "COMPLETED" : "NOT COMPLETED"}</p>
            <button
              onClick={() => {
                setWorkouts(
                  workouts.map((work) => {
                    if (work.id === id) {
                      return { ...work, weight: work.weight + 5 };
                    }
                    return work;
                  }),
                );
              }}
            >
              UPDATE
            </button>
            <button
              onClick={() => {
                setWorkouts(
                  workouts.map((work) => {
                    if (work.id === id) {
                      return { ...work, completed: true };
                    }
                    return work;
                  }),
                );
              }}
            >
              COMPLETED
            </button>
            <button
              onClick={() => {
                setWorkouts(
                  workouts.filter((work) => {
                    return work.id !== id;
                  }),
                );
              }}
            >
              DELETE
            </button>
          </div>
        );
      })}
      {workouts.length === 0 && <p>データがありません。</p>}
      <button
        onClick={() => {
          setWorkouts([
            ...workouts,
            { id: 4, name: "DEADLIFT", weight: 100, completed: false },
          ]);
        }}
      >
        + ADD WORKOUT
      </button>
    </>
  );
}

function WorkoutLogHeader() {
  return (
    <>
      <h2 className="workoutlog-header">WORKOUT TRACKER</h2>
      <h3 className="workoutlog-subtitle">今日のトレーニングを記録しよう</h3>
    </>
  );
}

export function AppWorkoutLog() {
  // 種目管理用state
  const [name, setName] = useState("");
  // 重量管理用state
  const [weight, setWeight] = useState("");
  // 記録管理用state
  const [workout, setWorkout] = useState([]);
  // 編集用state
  const [edit, setEdit] = useState(null);
  // 入力欄の中身を種目管理用stateに代入する関数
  function nameInput(e) {
    return setName(e.target.value.replace(/[ 　]/g, ""));
  }

  function weightInput(e) {
    return setWeight(e.target.value.replace(/[ 　]/g, ""));
  }

  return (
    <main className="workout-app">
      <header className="workout-top">
        <WorkoutLogHeader />
      </header>

      <section className="workout-form">
        <h3 className="section-title">ADD WORKOUT</h3>

        <p className="input-label">種目名</p>
        <input
          className="workout-input"
          type="text"
          placeholder="種目名"
          // 入力欄とstateを連動
          value={name}
          onChange={nameInput}
        ></input>

        {name.trim() === "" && (
          <p className="input-error">種目名を入力してください</p>
        )}

        <p className="input-label">重量</p>
        <input
          className="workout-input"
          type="number"
          placeholder="重量"
          value={weight}
          onChange={weightInput}
        ></input>

        {weight.trim() === "" && (
          <p className="input-error">重量を入力してください</p>
        )}

        <button
          className="workout-submit"
          onClick={() => {
            // 追加時と編集時の挙動を分ける
            // どちらも配列を更新して再レンダリングするためsetWorkoutで囲む
            edit !== null
              ? setWorkout(
                  workout.map((work) => {
                    // 比較してるworkのidと編集時のidが一致するか
                    if (work.id === edit) {
                      return { ...work, name: name, weight: weight };
                    }
                    // それ以外のworkは変更なし
                    return work;
                  }),
                )
              : setWorkout([
                  ...workout,
                  { id: crypto.randomUUID(), name: name, weight: weight },
                ]);
            // 入力欄と編集用IDをリセット
            // ここでnullを入れておかないと上の条件分岐の時にずっとedit!==nullとなり
            // 通常の動作に戻れない
            setName("");
            setWeight("");
            setEdit(null);
          }}
          // ボタンの制御
          disabled={name.trim() === "" || weight.trim() === ""}
        >
          {edit !== null ? "保存" : "追加"}
        </button>
      </section>

      <section className="workout-records">
        <h2 className="section-title">WORKOUT RECORDS</h2>

        {workout.length === 0 && (
          <p className="empty-message">NO RECORDS YET</p>
        )}

        <div className="workout-list">
          {workout.map(({ id, name, weight }) => {
            return (
              <div className="workout-card" key={id}>
                <div className="workout-info">
                  <p className="workout-name">{name}</p>
                  <p className="workout-weight">
                    {weight} <span>kg</span>
                  </p>
                  <p className="workout-status">
                    {weight >= 100 ? "EXCELLENT" : "GREAT"}
                  </p>
                </div>

                <div className="workout-actions">
                  <button
                    className="edit-button"
                    onClick={() => {
                      // 編集時、入力欄に記録を表示
                      setName(name);
                      setWeight(weight);
                      setEdit(id);
                    }}
                  >
                    EDIT
                  </button>

                  <button
                    className="delete-button"
                    onClick={() => {
                      setWorkout(
                        workout.filter((work) => {
                          return work.id !== id;
                        }),
                      );
                      // 削除した記録が編集中の時に編集処理ごと削除
                      // この時削除した記録が編集中なのかを比較
                      if (edit === id) {
                        setName("");
                        setWeight("");
                        setEdit(null);
                      }
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
function FitnessLogTitle() {
  return (
    <div className="fitness-title">
      <span className="fitness-label">YOUR TRAINING JOURNAL</span>
      <h2>
        WORKOUT
        <br />
        TRACKER<span className="title-dot">.</span>
      </h2>
      <p>今日のトレーニングを記録しよう</p>
    </div>
  );
}

function FitnessLogForm(props) {
  return (
    <section className="fitness-form-section">
      <FitnessLogTitle />

      <div className="fitness-form">
        <div className="section-heading">
          <span className="section-number">01</span>
          <h3>ADD WORKOUT</h3>
        </div>

        <div className="input-group">
          <label>種目名</label>
          <input
            ref={props.nameInputRef}
            type="text"
            placeholder="種目名"
            value={props.name}
            onChange={props.nameInput}
          />
          {props.name.trim() === "" && (
            <p className="error-message">種目名を入力してください</p>
          )}
        </div>

        <div className="input-group">
          <label>重量</label>
          <input
            type="number"
            placeholder="重量"
            value={props.weight}
            onChange={props.weightInput}
          />
          {props.weight.trim() === "" && (
            <p className="error-message">重量を入力してください</p>
          )}
        </div>

        <button
          className="submit-button"
          onClick={() => {
            props.edit === null
              ? props.setWorkout([
                  ...props.workout,
                  {
                    id: crypto.randomUUID(),
                    name: props.name,
                    weight: props.weight,
                  },
                ])
              : props.setWorkout(
                  props.workout.map((work) => {
                    if (work.id === props.edit) {
                      return {
                        ...work,
                        name: props.name,
                        weight: props.weight,
                      };
                    }
                    return work;
                  }),
                );

            props.setName("");
            props.setWeight("");
            props.setEdit(null);
          }}
          disabled={props.name.trim() === "" || props.weight.trim() === ""}
        >
          {props.edit === null ? "ADD RECORD" : "SAVE CHANGES"}
        </button>
      </div>
    </section>
  );
}

function FitnessLogList({
  edit,
  workout,
  setName,
  setWeight,
  setWorkout,
  setEdit,
  nameInputRef,
}) {
  return (
    <section className="fitness-list-section">
      <div className="section-heading list-heading">
        <div>
          <span className="section-number">02</span>
          <h3>WORKOUT RECORDS</h3>
        </div>

        <span className="record-count">
          {workout.length.toString().padStart(2, "0")} RECORDS
        </span>
      </div>

      {workout.length === 0 && (
        <div className="empty-message">
          <span
            className="empty-icon"
            onClick={() => {
              nameInputRef.current.focus();
            }}
          >
            ＋
          </span>
          <p>NO RECORDS YET</p>
          <span>YOUR JOURNEY STARTS HERE.</span>
        </div>
      )}
      <div className="fitness-records">
        {workout.map((work) => {
          return (
            <FitnessLogCard
              key={work.id}
              // カード一件分のオブジェクト
              work={work}
              // 記録配列
              workout={workout}
              edit={edit}
              setName={setName}
              setWeight={setWeight}
              setEdit={setEdit}
              setWorkout={setWorkout}
            />
          );
        })}
      </div>
    </section>
  );
}

function FitnessLogCard({
  work,
  workout,
  edit,
  setName,
  setWeight,
  setEdit,
  setWorkout,
}) {
  return (
    <>
      <div className="fitness-record">
        <div className="record-info">
          <span className="record-category">TRAINING RECORD</span>
          <h4>{work.name}</h4>
          <p>
            <strong>{work.weight}</strong>
            <span> kg</span>
          </p>
          <span className={`record-rank ${work.weight >= 120 ? "legend" : ""}`}>
            {work.weight >= 120 ? "LEGEND" : "GREAT"}
          </span>
        </div>

        <div className="record-actions">
          <button
            className="edit-button"
            onClick={() => {
              setName(work.name);
              setWeight(work.weight);
              // editに編集ボタンが押された要素のidを代入
              setEdit(work.id);
            }}
          >
            EDIT
          </button>

          <button
            className="delete-button"
            onClick={() => {
              setWorkout(
                workout.filter((workout) => {
                  return workout.id !== work.id;
                }),
              );
              // 現在のeditの値が削除ボタンが押された記録のidと一致するなら
              if (edit === work.id) {
                setName("");
                setWeight("");
                setEdit(null);
              }
            }}
          >
            DELETE
          </button>
        </div>
      </div>
    </>
  );
}

export function AppFitnessPage() {
  const [Name, setName] = useState("");
  const [Weight, setWeight] = useState("");
  const [workout, setWorkout] = useState([]);
  const [edit, setEdit] = useState(null);
  const nameInputRef = useRef(null);

  function nameInput(e) {
    return setName(e.target.value.replace(/[ 　]/g, ""));
  }

  function weightInput(e) {
    return setWeight(e.target.value.replace(/[ 　]/g, ""));
  }

  return (
    <main className="fitness-app">
      <div className="fitness-container">
        <FitnessLogForm
          name={Name}
          weight={Weight}
          edit={edit}
          workout={workout}
          setName={setName}
          setWeight={setWeight}
          setWorkout={setWorkout}
          setEdit={setEdit}
          nameInput={nameInput}
          weightInput={weightInput}
          nameInputRef={nameInputRef}
        />

        <FitnessLogList
          edit={edit}
          workout={workout}
          setName={setName}
          setWeight={setWeight}
          setWorkout={setWorkout}
          setEdit={setEdit}
          nameInputRef={nameInputRef}
        />
      </div>
    </main>
  );
}
