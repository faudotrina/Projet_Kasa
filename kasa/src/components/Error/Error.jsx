import '../../styles/error.scss'

function Error() {
  return (
    <div className="errorPage">
      <h1 className="errorTitle">404</h1>
      <p className="errorText">Oups! La page que vous demandez n'existe pas</p>
      <a href="/" className="errorReturn">
        Retourner sur la page d'acceuil
      </a>
    </div>
  )
}

export default Error
