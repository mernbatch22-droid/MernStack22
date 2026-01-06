import { useNavigate } from "react-router-dom"
import "./Page.css"
function NotFound() {
  const navigate = useNavigate()
  return (
    <div class="notfound">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you’re looking for doesn’t exist or was moved.</p>

      <button onClick={() => navigate("/")}>back to home</button>
    </div>
  )
}

export default NotFound