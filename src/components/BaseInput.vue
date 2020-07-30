<template>
  <div class="form-group was-validated">
    <label :for="label">{{ label }}</label>
    <input
      :id="label"
      :type="type"
      name="eventTitle"
      class="form-control"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      :autofocus="Boolean(autofocus)"
      required
    />
    <div class="invalid-feedback">Please enter the event title.</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { formstore } from "@/store/formstore";

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
      validation(types: string) {
        return ["text", "email", "password", "time"].includes(types);
      },
    },
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
    },
    autofocus: {
      type: String,
      default: false,
    },
  },
  setup() {
    return { formstore };
  },
});
</script>

<style></style>
