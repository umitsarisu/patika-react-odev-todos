import { useState } from "react";
import $ from "jquery";

function Main() {
    const [inputToggle, setInputToggle] = useState(true);
    const toogleAll = () => {
        setInputToggle(!inputToggle);
        $(".toggle").attr("checked", inputToggle)
    }
    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all" style={{ cursor: "pointer" }} onClick={toogleAll}>
                Mark all as complete
            </label>

            <ul className="todo-list">
                <li className="completed">
                    <div className="view">
                        <input className="toggle" type="checkbox" value={inputToggle} />
                        <label>Learn JavaScript</label>
                        <button className="destroy"></button>
                    </div>
                </li>
                <li>
                    <div className="view">
                        <input className="toggle" type="checkbox" value={inputToggle} />
                        <label>Learn React</label>
                        <button className="destroy"></button>
                    </div>
                </li>
                <li>
                    <div className="view">
                        <input className="toggle" type="checkbox" value={inputToggle} />
                        <label>Have a life!</label>
                        <button className="destroy"></button>
                    </div>
                </li>
            </ul>
        </section>
    )
}
export default Main;