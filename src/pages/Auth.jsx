import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "./lib/appwrite";

export default function Auth() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // REGISTER
  const register = async () => {
    await account.create("unique()", email, password, name);
    await account.createEmailPasswordSession(email, password);
  };

  // LOGIN
  const login = async () => {
    await account.createEmailPasswordSession(email, password);
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        await login();
      } else {
        await register();
      }

      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={submit} style={styles.box}>
        <h2 style={styles.title}>
          {isLogin ? "Login" : "Create Account"}
        </h2>

        {!isLogin && (
          <input
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          style={styles.input}
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button}>
          {isLogin ? "Login" : "Register"}
        </button>

        <p
          onClick={() => setIsLogin(!isLogin)}
          style={styles.toggle}
        >
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </p>
      </form>
    </div>
  );
}

// ===== INLINE STYLES =====
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
  },

  box: {
    width: "350px",
    background: "#111827",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
  },

  title: {
    color: "white",
    marginBottom: "20px",
    textAlign: "center",
  },

  input: {
    padding: "12px",
    marginBottom: "10px",
    border: "none",
    borderRadius: "6px",
    outline: "none",
  },

  button: {
    padding: "12px",
    background: "#22c55e",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
    fontWeight: "bold",
  },

  toggle: {
    color: "#60a5fa",
    marginTop: "15px",
    textAlign: "center",
    cursor: "pointer",
    fontSize: "14px",
  },
};