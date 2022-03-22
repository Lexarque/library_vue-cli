<template>
    <div id="students">
        <br>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Num.</th>
      <th scope="col">Name</th>
      <th scope="col">Birth Date</th>
      <th scope="col">Gender</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(dt, id) in students_data" :key="id">
        <td>{{id+1}}</td>
        <td>{{dt.name_students}}</td>
        <td>{{dt.birth_date}}</td>
        <td>{{dt.gender}}</td>
        <td>{{dt.address}}</td>
    </tr>
  </tbody>
</table>
    </div>
</template>
<script>
    export default{
        name: 'Students_Data',
        data(){
            return{
                students_data: []
            }
        },
        methods:{
            GetData: function(){
                this.axios.get('http://localhost:8000/api/students').then(
                    (res)=>{
                        this.students_data = res.data
                    })
            }
        },
        mounted(){
            this.GetData()
        } 
    }
</script>
