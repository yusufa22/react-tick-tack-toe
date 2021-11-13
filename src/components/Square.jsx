export default function Square(props) {
  function onClickHandler(e) {
    const f = props.onClick;
    e.target.appendChild(document.createTextNode(`${props.player}`));
    setTimeout(() => {
      f(e);
    }, 100);
  }

  return <div className="square" onClick={onClickHandler} id={props.id}></div>;
}
