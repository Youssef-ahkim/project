import React from "react";
import Navigation from "./Navigation";

export default function Login(){
    return (
          <div className="app">
            <form action="" className="container-fluid w-25 form p-5">
              <label htmlFor="username" className="form-label mb-1 text-dark">
                Username:
              </label>
              <input type="text" name="username" className="form-control mb-4 text" />
              <label htmlFor="password" className="form-label m-1 text-dark">
                Password:
              </label>
              <input type="text" name="password" className="form-control mb-4 text" />
              <input type="button" value="Login" className="btn"/>
            </form>
            
            <Navigation />

            </div>
            )
}