<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card">
            <h2 class="card-title text-center">Dynamic Form</h2>
            <form @submit="submitForm">
              <div
                class="card-body py-md-4"
                v-for="block in formDefinition.blocks"
                :key="block.token"
              >
                <label :for="block.token">{{ block.props.title }}</label>
                <div class="form-group">
                  <template v-if="block.type === 'text'">
                    <input
                      :id="block.token"
                      v-model="formData[block.token]"
                      type="text"
                      :placeholder="block.props.placeholder"
                      @input="validateText(block.token)"
                    />
                    <span class="text-danger">{{
                      validationErrors[block.token]
                    }}</span>
                  </template>
                </div>
                <div class="form-group">
                  <template v-if="block.type === 'date'">
                    <input
                      :id="block.token"
                      v-model="formData[block.token]"
                      type="date"
                      :placeholder="block.props.placeholder"
                      @input="validateDate(block.token)"
                    />
                    <span class="text-danger">{{
                      validationErrors[block.token]
                    }}</span>
                  </template>
                </div>
                <div class="form-group">
                  <template v-if="block.type === 'checkbox'">
                    <input
                      :id="block.token"
                      v-model="formData[block.token]"
                      type="checkbox"
                      :placeholder="block.props.placeholder"
                    />
                  </template>
                </div>
                <div class="form-group">
                  <template v-if="block.type === 'radio'">
                    <div
                      v-for="(option, index) in block.props.options"
                      :key="index"
                    >
                      <label :for="`${block.token}-${index}`">{{
                        option
                      }}</label>
                      <input
                        :id="`${block.token}-${index}`"
                        v-model="formData[block.token]"
                        type="radio"
                        :value="option"
                        @input="validateRadio(block.token)"
                      />
                    </div>
                    <span class="text-danger">{{
                      validationErrors[block.token]
                    }}</span>
                  </template>
                </div>
                <div class="form-group">
                  <template v-if="block.type === 'select'">
                    <select
                      :id="block.token"
                      v-model="formData[block.token]"
                      @change="validateSelect(block.token)"
                    >
                      <option :value="null" :disabled="true">
                        Select an option
                      </option>
                      <option
                        v-for="(option, index) in block.props.options"
                        :key="index"
                        :value="option"
                      >
                        {{ option }}
                      </option>
                    </select>
                  </template>
                  <span class="text-danger">{{
                    validationErrors[block.token]
                  }}</span>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import inpuFile from "../assets/json/dynamicForm.json";

export default {
  name: "dynamic-form-data",
  data() {
    return {
      formDefinition: inpuFile,
      formData: {},
      validationErrors: {},
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      if(this.validationErrors) {
        return;
      }
      console.log("Form data:", this.formData);
      this.validationErrors = {}
    },
    validateText(fieldName) {
      const textValue = this.formData[fieldName];
      if (typeof textValue !== "string" || textValue.trim() === "") {
        this.validationErrors[fieldName] =
          "This field must be a non-empty string.";
      } else {
        this.validationErrors[fieldName] = null;
      }
    },
    validateDate(fieldName) {
      const dateValue = this.formData[fieldName];
      if (!dateValue) {
        this.validationErrors[fieldName] = "This field is required.";
      } else {
        this.validationErrors[fieldName] = null;
      }
    },
    validateRadio(fieldName) {
      const selectedOption = this.formData[fieldName];
      const block = this.formDefinition.blocks.find(
        (block) => block.token === fieldName
      );

      if (block.props.options.indexOf(selectedOption) === -1) {
        this.validationErrors[fieldName] = "Please select a valid option.";
      } else {
        this.validationErrors[fieldName] = null;
      }
    },
    validateSelect(fieldName) {
      const selectedOption = this.formData[fieldName];
      if (!selectedOption || selectedOption === null) {
        this.validationErrors[fieldName] = "Please select an option.";
      } else {
        this.validationErrors[fieldName] = null;
      }
    },
  },
};
</script>

<style scoped>
h2 {
  padding-top: 1.5rem;
}
.text-danger {
  color: red;
}
.card {
  border: 0.4rem solid #f8f9fa;
  top: 10%;
}
.form-control {
  background-color: #f8f9fa;
  padding: 20px;
  padding: 25px 15px;
  margin-bottom: 1.3rem;
}

.form-control:focus {
  color: #000000;
  background-color: #ffffff;
  border: 3px solid #da5767;
  outline: 0;
  box-shadow: none;
}

.btn {
  padding: 0.6rem 1.2rem;
  background: #da5767;
  border: 2px solid #da5767;
}
.btn-primary:hover {
  background-color: #df8c96;
  border-color: #df8c96;
  transition: 0.3s;
}
</style>