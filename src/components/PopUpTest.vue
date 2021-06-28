<template>
  <div>
    <vue-modaltor :visible="open" @hide="open=false">
      <template #header>
      <!--    add your custom header     -->
        <div>
          <i class="closeicon">x</i>
          <p>add modal title or not</p>
        </div>
      </template>
      <template #body>
          <p>
            “Never forget what you are,
            for surely the world will not. 
            Make it your strength. Then it can never be your weakness.
            Armour yourself in it, and it will never be used to hurt you.
            ” ― George R.R. Martin, A Game of Thrones.
          </p>
        </template>
    </vue-modaltor>
    <button @click="open=true">modal-basic</button>
  </div>
</template>
<script>
import "vue-modaltor/dist/vue-modaltor.css";

export default {
    name: "PopUpTest",
    data() {
        return {
          open: false
        }
    }
}
</script>