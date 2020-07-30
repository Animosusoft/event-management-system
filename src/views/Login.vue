<template>
  <div id="admin_login">
    <main>
      <header>Welcome To Metasolutions Admin Login</header>
      <b-container class="mt-5">
        <b-row align-h="center" no-gutters>
          <b-card
            align="center"
            title="Admin Login"
            bg-variant="secondary"
            text-variant="white"
            class="col-sm-6 col-md-9"
            :img-src="require('../assets/imágenes/event_management.jpeg')"
            img-alt="Event Management Company Definition"
            img-height="auto"
            img-width="40%"
            img-start
          >
            <b-card-header>Please Enter your username and password</b-card-header>
            <b-card-body>
              <b-form @submit.prevent="login">
                <b-form-group label="Username" label-for="admin_username">
                  <b-input-group>
                    <b-input-group-prepend is-text>
                      <b-icon-envelope-open />
                    </b-input-group-prepend>
                    <b-form-input
                      id="admin_username"
                      type="text"
                      v-model="store.username"
                      placeholder="Admin Username"
                      required
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>

                <b-form-group label="Password" label-for="admin_password">
                  <b-input-group>
                    <b-input-group-prepend is-text>
                      <b-icon-shield-lock />
                    </b-input-group-prepend>
                    <b-form-input
                      id="admin_password"
                      type="password"
                      v-model="store.password"
                      placeholder="Password"
                      required
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
                <b-button type="submit" variant="info" squared>Login</b-button>
              </b-form>
            </b-card-body>
            <b-card-footer>Have a nice time planning the next big event</b-card-footer>
          </b-card>
        </b-row>
      </b-container>
    </main>
    <footer class="my-5">
      <header></header>
      <p></p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import loginstore from "@/store/loginstore";

export default defineComponent({
  setup(props, { root: { $router } }) {
    const store = loginstore;

    const login = async () => {
      const login_data = new FormData();
      login_data.set("username", store.username);
      login_data.set("password", store.password);

      await fetch("https://metasolution-alpha.herokuapp.com/api/v1/admin", {
        method: "post",
        mode: "cors",
        body: login_data,
      })
        .then((loginValidationState) => {
          if (loginValidationState.status === 200) {
            $router.push({ name: "Home" });
          } else {
            loginValidationState.json().then((loginErrorState) => {
              throw new Error(loginErrorState);
            });
          }
        })
        .catch((error: Error) => {
          throw error;
        });
    };
    return { store, login };
  },
});
</script>

<style lang="scss">
@font-face {
  font-family: DancingScript;
  src: url("../assets/fuentes/DancingScript-VariableFont_wght.ttf");
}

@font-face {
  font-family: CrimsonPro;
  src: url("../assets/fuentes/CrimsonPro-VariableFont_wght.ttf");
}
@font-face {
  font-family: Lemonada;
  src: url("../assets/fuentes/Lemonada-VariableFont_wght.ttf");
}
@font-face {
  font-family: EBGaramond;
  src: url("../assets/fuentes/EBGaramond-VariableFont_wght.ttf");
}
@font-face {
  font-family: GrenzeGotisch;
  src: url("../assets/fuentes/GrenzeGotisch-VariableFont_wght.ttf");
}
@font-face {
  font-family: Oswald;
  src: url("../assets/fuentes/Oswald-VariableFont_wght.ttf");
}

main > header {
  font-family: GrenzeGotisch;
  font-size: 4em;
  line-height: 2em;
  letter-spacing: 0.299em;
  font-style: normal;
  font-variation-settings: "wdth" 700, "wght" 700;
  @media screen and (max-width: 600px) {
    font-size: 2em;
    line-height: 1.5em;
    letter-spacing: 0.204em;
  }
}
$gradient_color: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
$gradient_color_1: linear-gradient(
  to right bottom,
  #20bdd4,
  #51adde,
  #8499d5,
  #a786b9,
  #b57795
);
$gradient_color_2: linear-gradient(
  to left bottom,
  #673849,
  #765476,
  #7875a1,
  #6e98c4,
  #68bbda,
  #58c4e5,
  #40cdf0,
  #00d6fa,
  #00c4ff,
  #00adff,
  #5f8dff,
  #b05ffb
);
$gradient_color_3: linear-gradient(
  to left top,
  #d2eecf,
  #c0eecb,
  #aaeeca,
  #90eecd,
  #6eedd3,
  #4ee9e2,
  #29e4f2,
  #00deff,
  #23d0ff,
  #63bfff,
  #98aaff,
  #c293ee
);
#admin_login {
  background-image: url(../assets/imágenes/event_management_company_definition.jpeg);
  background-repeat: no-repeat;
  background-size: cover;

  /* Preserve aspet ratio */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.card-header,
.card-title,
.card-footer,
.d-block {
  font-family: Lemonada;
  font-size: 1rem;
  line-height: 1;
}
.d-block {
  text-align: start;
}

main {
  header,
  p {
    text-align: center;
  }
}
footer {
  header,
  p {
    text-align: center;
  }
}
</style>

