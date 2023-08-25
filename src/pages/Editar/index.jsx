import React, {useEffect, useState} from "react";
import api from '../../services/api';
import { useNavigate, useParams } from "react-router-dom";
import styles from './Editar.module.css'

const initialValue = {
    title: '',
    image: '',
    price: 0,
    url: '',
};


function Editar (){

    const [values, setValues] = useState(initialValue);

    const navigate = useNavigate();

    const {id} = useParams();

    const url = `/celulares/${id}`;

    useEffect( () => {
        if (id){
            api.get(url)
                .then( (response) => {
                    setValues(response.data)
                })
        }
},[])

    function onSubmit(evento){
        evento.preventDefault(); // não executa o comportamento default do formulário (o recarregar a página)

        api.put(url, values)
            .then( () => {
                navigate('/administrar');
            })
    }

    function onChange(ev){
        const {name, value} = ev.target
        // console.log({name, value});

        setValues({... values,[name]:value})
    }

    return(
        <>
        <h1>Editar</h1>
        <div className={styles.form}>
        <form onSubmit={onSubmit}>
            <div className={styles.booksFormGroup}>
                <label className={styles.Label} htmlFor="title">Titulo</label>
                <input className={styles.Input} type="text" id="title" name="title" onChange={onChange} />
            </div>
            <div className={styles.booksFormGroup}>
                <label className={styles.Label} htmlFor="url">Url do Livro</label>
                <input className={styles.Input} type="text" id="url" name="url" onChange={onChange} />
            </div>
            <div className={styles.booksFormGroup}>
                <label className={styles.Label} htmlFor="image">Url/Imagem</label>
                <input className={styles.Input} type="text" id="image" name="image" onChange={onChange} />
            </div>
            <div className={styles.booksFormGroup}>
                <label className={styles.Label} htmlFor="price">Preço</label>
                <input className={styles.Input} type="text" id="price" name="price" onChange={onChange} />
            </div>
            <button className={styles.Button} type="submit">Salvar</button>
        </form>
        </div>
        </>
    )
}

export default Editar;