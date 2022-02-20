<template>
  <div class="login">
    <div class="form-container">
      <Tabs @selected-tab="handleSelectedTab" />
      <form v-if="displaySignup">
        <h1>RSVP</h1>
        <Input :placeholder="'Harry'" :label="'namn'" @input="handleInput" />
        <Input
          :type="'email'"
          :placeholder="'harry@doglife.com'"
          :label="'e-post'"
          @input="handleInput"
        />
        <Input
          :type="'password'"
          :placeholder="'något lagom hemligt'"
          :label="'lösenord'"
          @input="handleInput"
        />
        <Checkbox
          :label="'klart jag kommer!'"
          @checkbox-value="handleCheckbox"
        />
        <input class="submit" type="submit" @click="handleSignupLogin" />
      </form>
      <form v-else>
        <h1>Logga in</h1>
        <Input
          :type="'email'"
          :placeholder="'harry@doglife.com'"
          :label="'e-post'"
          @input="handleInput"
        />
        <Input
          :type="'password'"
          :placeholder="'något lagom hemligt'"
          :label="'lösenord'"
          @input="handleInput"
        />
        <input class="submit add" type="submit" @click="handleSignupLogin" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { User, EUserAction } from "../store/user/user.constants";
import Checkbox from "../components/ui-components/Checkbox.vue";
import Input from "../components/ui-components/Input.vue";
import Tabs from "../components/ui-components/Tabs.vue";
import { ICreateUserPayload, ILoginPayload } from "../store/user/user.types";

@Component({
  components: {
    Checkbox,
    Input,
    Tabs,
  },
})
export default class Login extends Vue {
  @User.Action(EUserAction.Login) actionLogin: (payload: ILoginPayload) => void;
  @User.Action(EUserAction.CreateUser)
  actionCreatUser: (payload: ICreateUserPayload) => void;

  attending = false;
  name = "";
  email = "";
  password = "";

  displaySignup = true;

  handleInput(type: string, inputValue: string) {
    switch (type) {
      case "email":
        this.email = inputValue;
        break;
      case "password":
        this.password = inputValue;
        break;
      case "text":
        this.name = inputValue;
        break;
    }
  }

  handleSelectedTab(tabName: string) {
    if (tabName === "RSVP") {
      this.displaySignup = true;
      return;
    }
    this.displaySignup = false;
  }

  toggleSignupLogin() {
    this.displaySignup = !this.displaySignup;
  }

  handleCheckbox(checkboxValue: boolean) {
    this.attending = checkboxValue;
  }

  get createUserPayload(): ICreateUserPayload {
    return {
      attending: this.attending,
      name: this.name,
      email: this.email,
      password: this.password,
    };
  }
  get createLoginPayload(): ILoginPayload {
    return {
      email: this.email,
      password: this.password,
    };
  }

  handleSignupLogin(event: Event) {
    event.preventDefault();
    if (this.displaySignup) {
      this.actionCreatUser(this.createUserPayload);
      return;
    }
    this.actionLogin(this.createLoginPayload);
  }
}
</script>
<style lang="scss" scoped>
.login {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  .form-container {
    width: 75%;
    max-width: 300px;
    height: 75%;
    max-height: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    background: white;

    padding: 8px;
    display: flex;
    flex-direction: column;

    h1 {
      margin: 0;
      font-family: "Pacifico";
      font-weight: 200;
      font-size: 60px;
      color: #fb566d;
      text-align: center;
    }

    .submit {
      background: #efdbe4;
      box-shadow: 2px 2px 4px #cbbac6, -2px -2px 4px #fffcff;
      border: none;
      width: 100%;
      display: block;
      padding: 8px 0;
      margin: 4px auto;

      &.add {
        margin-top: 12px;
      }
    }
  }
}
</style>
