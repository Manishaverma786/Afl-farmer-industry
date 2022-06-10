import React, { useState } from "react";
import setting from "../Farmer/assets/settings-icon.png";
import SideBarFarmer from "./SideBarFarmer";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

function Settings() {
  const history = useNavigate();
  const [old_password, setOldPassword] = useState([]);
  const [new_password1, setNewPassword1] = useState("");
  const [new_password2, setNewPassword2] = useState("");
  const formData = new FormData();

  async function settings(e) {
    e.preventDefault();
    let formdata = {
      old_password: old_password,
      new_password1: new_password1,
      new_password2: new_password2,
    };

    for (const [key, value] of Object.entries(formdata)) {
      formData.append(key, value);
      console.log(key, value);
    }

    let { data } = await axios.patch("/users/change-password", formData);
    console.log("data", data);
    localStorage.setItem("machine_info", JSON.stringify(data));
    history(`/loginfarmer`);
  }
  return (
    <div>
      <div id="wrapper">
        <SideBarFarmer />
      </div>
      <div className="col-md-9 col-sm-6" style={{ marginLeft: 300 }}>
        <h1
          className="text-center border border-1 p-4  shadow p-3 mt-3 mb-5 bg-body roundeds"
          style={{ marginTop: 0, color: "#172578 " }}
        >
          Settings
        </h1>
      </div>

      <div className="page-content-wrapper pt-2">
        <div
          class="container-fluid pt-2"
          style={{ "padding-left": "60px", marginLeft: "300px" }}
        >
          <div class="row" style={{ "margin-bottom": "5px" }}>
            <div class="col-4" style={{ width: "334px", "max-width": "329px" }}>
              <Link to="/profile">
                {" "}
                <button
                  onClick={(e) => {
                    console.log("Edit Profile Clicked");
                  }}
                  class="btn btn-primary btn-block btn-lg"
                  type="button"
                  style={{
                    height: "120px",
                    backgroundColor: "#172578",
                    marginLeft: "300px",
                  }}
                >
                  <i class="fa fa-edit"></i> Edit Profile
                </button>
              </Link>
            </div>
          </div>

          <div class="row" style={{ "margin-bottom": "50px" }}>
            <div class="col-4" style={{ width: "334px", "max-width": "329px" }}>
              <button
                onClick={(e) => {
                  console.log("Security Clicked");
                }}
                class="btn btn-primary btn-block btn-lg"
                type="button"
                style={{
                  height: "120px",
                  backgroundColor: "#172578",
                  marginLeft: "300px",
                  marginTop: "100px",
                }}
                data-toggle="modal"
                data-target="#changePassword"
                data-whatever="@mdo"
              >
                <i class="fa fa-lock"></i> Security
              </button>
            </div>
          </div>

          {/* open password change model */}

          <div
            class="modal fade"
            id="changePassword"
            tabindex="-1"
            role="dialog"
            aria-labelledby="changePasswordLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <br></br>
                  <br></br>
                  <br></br>
                  <h5 class="modal-title" id="changePasswordLabel">
                    Change Password
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form onSubmit={settings}>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">
                        Current Password:
                      </label>
                      <input
                        type="password"
                        value={old_password}
                        placeholder="Current Password"
                        class="form-control"
                        id="recipient-name"
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                    </div>

                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">
                        New Password:
                      </label>
                      <input
                        type="password"
                        value={new_password1}
                        placeholder="New Password"
                        class="form-control"
                        id="recipient-name"
                        onChange={(e) => setNewPassword1(e.target.value)}
                      />
                    </div>

                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">
                        Confirm Password:
                      </label>
                      <input
                        type="password"
                        value={new_password2}
                        placeholder="Confirm Password"
                        class="form-control"
                        id="recipient-name"
                        onChange={(e) => setNewPassword2(e.target.value)}
                      />
                    </div>

                    <div class="modal-footer">
                      <button type="submit" class="btn btn-primary">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
