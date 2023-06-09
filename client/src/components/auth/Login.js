import React, { Fragment, useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => 
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    }

    // Redirect if is logged in
    if (isAuthenticated) {
       return <Navigate to="/dashboard" />
    }

  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Ingreso</h1>
        <p className="lead"><i className="fas fa-user"></i> Ingrese a su cuenta</p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              required
              autoFocus
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              minLength="6"
              autoComplete="on"
            />
          </div>
          <input id="form-login-submit-button" type="submit" className="btn btn-primary" value="Ingresar" />
          <div className="form-group">
            <Link to="/forgot-password">Perdio su Contraseña?</Link>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, login })(Login);