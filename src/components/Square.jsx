export default function Square(props) {
  function onClickHandler(e) {
    if (e.target.innerHTML === "") {
      const f = props.onClick;
      e.target.innerHTML = props.player;
      setTimeout(() => {
        f(e);
      }, 100);
    }
  }

  return <div className="square" onClick={onClickHandler} id={props.id}></div>;
}
