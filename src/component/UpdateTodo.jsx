
import Menu from "./Menu";

const UpdateTodo = () => {
    return (
        <div>

            <Menu />
            
            <p >Update Todo Data</p>
            <form>


                <input type="text" placeholder="Enter Title" /> <br />
                <input type="text" placeholder="Enter description" /><br />
                <input type="text" placeholder="Enter long Description" /><br />
                <input type="file" /><br />
                <button type="submit">Update Todo</button>


            </form>
        </div>
    );
}

export default UpdateTodo;
// This component is used to update an existing todo item.