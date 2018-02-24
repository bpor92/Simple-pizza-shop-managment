<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Simple users management application</h1>
        <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quis laborum voluptatem facere, non, perferendis excepturi ab aliquid velit distinctio, similique incidunt tenetur necessitatibus facilis. Cumque ullam consequatur voluptates in.</p>
      </div>
    </div>
        <input v-validate="'required|email'" class="form-control" :class="{'is-invalid': errors.has('emails') }" name="emails" type="text" placeholder="Email">
        <div v-show="errors.has('emails')"  class="invalid-feedback">{{ errors.first('emails') }}</div>
        
        <p class="jumbotron">
          <pre>
            {{errors}}

          </pre>
        </p>
  </div>
</template>
