import { useState } from "react";

export default function calculator() {
  const [expr, setExpr] = useState("");
  const [output, setOutput] = useState("0");

  const append = (ch) => {
    if (/[+\-*/%]/.test(ch)) {
      if (expr === "" && ch !== "-") return;
      if (/[+\-*/%]$/.test(expr)) {
        setExpr(expr.slice(0, -1) + ch);
        return;
      }
    }
    if (ch === ".") {
      const parts = expr.split(/[^0-9.]/);
      const last = parts[parts.length - 1];
      if (last.includes(".")) return;
      if (last === "") ch = "0.";
    }
    setExpr(expr + ch);
  };

  const clearAll = () => {
    setExpr("");
    setOutput("0");
  };

  const toggleSign = () => {
    const m = expr.match(/(.*?)([-+]?[0-9]*\.?[0-9]+)$/);
    if (!m) return;
    let prefix = m[1] || "";
    let num = m[2];
    if (num.startsWith("-")) num = num.slice(1);
    else num = "-" + num;
    setExpr(prefix + num);
  };

  const percent = () => {
    const m = expr.match(/(.*?)([-+]?[0-9]*\.?[0-9]+)$/);
    if (!m) return;
    const prefix = m[1] || "";
    const num = parseFloat(m[2]);
    setExpr(prefix + num / 100);
  };

  const evaluateExpression = (s) => {
    try {
      const result = Function("return " + s)();
      return result.toString();
    } catch (e) {
      return "Error";
    }
  };

  const evaluate = () => {
    if (!expr) return;
    const res = evaluateExpression(expr);
    setOutput(res);
    setExpr(res);
  };

  const buttons = [
    { label: "C", action: clearAll },
    { label: "±", action: toggleSign },
    { label: "%", action: percent },
    { label: "÷", value: "/" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "×", value: "*" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "−", value: "-" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "+", value: "+" },
    { label: "0", value: "0", style: { gridColumn: "span 2" } },
    { label: ".", value: "." },
    { label: "=", action: evaluate, style: { gridColumn: "span 2", background: "teal" } },
  ];

  const styles = {
    calc: {
      width: "320px",
      margin: "20px auto",
      background: "#1e1e1e",
      padding: "20px",
      borderRadius: "12px",
      color: "white",
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      fontFamily: "Arial, sans-serif",
    },
    screen: {
      background: "#333",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "15px",
      textAlign: "right",
    },
    history: { fontSize: "14px", color: "#aaa" },
    output: { fontSize: "24px", fontWeight: "bold" },
    keys: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "10px",
    },
    button: {
      height: "50px",
      border: "none",
      borderRadius: "8px",
      background: "#444",
      color: "white",
      fontSize: "18px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.calc}>
      <div style={styles.screen}>
        <div style={styles.history}>{expr || " "}</div>
        <div style={styles.output}>{output}</div>
      </div>
      <div style={styles.keys}>
        {buttons.map((btn, i) => (
          <button
            key={i}
            style={{ ...styles.button, ...(btn.style || {}) }}
            onClick={() => (btn.action ? btn.action() : append(btn.value))}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}
