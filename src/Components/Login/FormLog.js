import React, { useState } from "react";
import "./Login.css";

const FormLog = ({ handleClick }) => {
  const [email, setEmail] = useState("");
  const [apiToken, setApiToken] = useState("");

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div class="container">
        <div class="row">
          <div class="col-md-offset-3 col-md-6">
            <form class="form-horizontal">
              <span class="heading">
                Доступ к <a href="https://bizon365.ru/">Bizon</a>
              </span>
              <div class="form-group">
                <input
                  class="form-control"
                  id="inputEmail"
                  placeholder="E-mail"
                  type="email"
                  placeholder="Почта e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <i class="fa fa-user"></i>
              </div>
              <div class="form-group help">
                <input
                  class="form-control"
                  id="inputPassword"
                  placeholder="API-token"
                  type="api-token"
                  value={apiToken}
                  onChange={(e) => setApiToken(e.target.value)}
                />
                <i class="fa fa-lock"></i>
              </div>
              <div class="form-group">
                <div>
                  <span>
                    <a href="https://www.youtube.com/watch?v=4Q9-v2L4h3U">
                      Как узнать токен?
                    </a>
                  </span>
                </div>
                <button
                  type="submit"
                  class="btn btn-default"
                  onClick={() => handleClick(email, apiToken)}
                >
                  ВХОД
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLog;
