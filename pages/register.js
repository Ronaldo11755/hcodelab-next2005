import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/Register.module.css'
import React, {useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
import { Cookies } from 'react-cookie'

export default function Register(){

    const [values, setValues] = useState({name:'', email:'', password:'', birth_at:'', level:'1', photo:'user.png' })

    const handleInputChange = e =>{
        const { name, value } = e.target
        setValues({...values, [name]:value})
        console.log(name, value)
    }

    const handleFormSubmit = e =>{
        e.preventDefault()
        axios.post(`https://hcodelab-adonis.herokuapp.com/users`, values)
        .then( res => {
            alert(' Olá ${res.data.name} seus dados foram cadastrados ID:${res.data.id}')
            window.location.href=("/login")
        }).catch( err => console.log("Deu ruim!", err))
    }
    return(
        <>
            <Header />

                <main id={ styles.register } className={ styles.page }>
        
                    <div className={ styles['page-header']}>
                        <header>
                            <h1>Cadastro</h1>
                        </header>
                        
                        <hr className="italy" />
                    </div>

                    <section>

                        <div className={ styles.image }></div>

                        <form onSubmit={handleFormSubmit} className={ styles.form }>
                            <div>
                                <div className={ styles.fields }>
                                    <div className={ styles.field }>
                                        <input type="text" name="name" id="name" onChange={handleInputChange} onFocus={handleInputChange}/>
                                        <label htmlfor="name">Nome Completo</label>
                                    </div>

                                    <div className={ styles.field }>
                                        <input type="email" name="email" id="email" onChange={handleInputChange} onFocus={handleInputChange}/>
                                        <label htmlfor="email">E-mail</label>
                                    </div>

                                </div>

                                <div className={ styles.fields }>
                                    <div className={ styles.field }>
                                        <input type="date" name="birth_at" id="birth_at" onChange={handleInputChange} onFocus={handleInputChange}/>
                                        <label htmlfor="birth_at">Data de Nascimento</label>
                                    </div>

                                    <div className={ styles.field }>
                                        <input type="password" name="password" id="password" onChange={handleInputChange} onFocus={handleInputChange}/>
                                        <label htmlfor="password">Senha</label>
                                    </div>

                                </div>

                                <button type="submit">Entrar</button>

                                </div>

                            <p>Se você já possui uma conta,
                                
                            <Link href="/login">
                                <a title="Cadastre-se">clique aqui</a> 
                            </Link>
                                
                            para fazer login.</p>
                            
                        </form>

                    </section>
                
                </main>

            <Footer />
        </>
    )
}