<template>
    <div class="register-container">
        <div class="register-heading">
            <h2>Register Page</h2>
        </div>
        <div class="register-form">
            <form @submit.prevent="login">
                <div class="register-field">
                    <label for="name">Name:</label>
                    <input type="text" name="name" v-model="name" />
                </div>
                <div class="register-field">
                    <label for="email">Email:</label>
                    <input type="email" name="email" v-model="email" />
                </div>
                <div class="register-field">
                    <label for="password">Password:</label>
                    <input type="password" name="password" v-model="password" />
                </div>
                <button type="submit" class="register-button">Register</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

.register-heading {
    margin-bottom: 20px;
}

.register-form {
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 5px;
}

.register-field {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
}

.register-button {
    background-color: #4caf50;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.register-button:hover {
    background-color: #3e8e41;
}

@media (max-width: 600px) {

    input[type="text"],
    input[type="email"],
    input[type="password"] {
        font-size: 14px;
    }
}
</style>
<script>
import { gql } from 'graphql-tag'

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        async createUser() {
            const mutation = gql`
        mutation CreateUser($name: String!, $email: String!, $password: String!) {
          createUser(name: $name, email: $email, password: $password) {
            id
            name
            email
          }
        }
      `

            const variables = {
                name: this.name,
                email: this.email,
                password: this.password,
            }

            const { data } = await this.$apollo.mutate({
                mutation,
                variables,
            })

            // handle response here
        },
    },
}
</script>