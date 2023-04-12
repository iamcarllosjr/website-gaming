import "./Form.css"
import { useForm } from "react-hook-form";


const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const handleSubmitData = (data) => {
        console.log("submit", data);
    };
    return (
        <main className="main">
            <form className="register" onSubmit={handleSubmit(handleSubmitData)} action="">
                <div className="title">
                   <h1>Register</h1>
                </div>

                <div className="fields">
                    <label htmlFor="">Your Address</label>
                    <input {...register('text')} 
                    type="text" className="input" />
                </div>

                <div className="fields">
                   <label htmlFor="">E-mail</label>
                   <input {...register('email')} 
                   type="email" className="input" />
                </div>

                <div className="fields">
                   <label htmlFor="">Password</label>
                  <input {...register('password')} 
                   type="password" className="input" />
                
                <div className="button">
                   <button type="submit" className="btn">Salvar</button>
                </div>
                </div>
            </form>
        </main>
    )
}

export default Form;