<template>
    <div id="students" class="container">
        <br>
        <div class="row">
            <div class="col-md-10">
                <input class="form-control me-2" type="search" placeholder="Input Student Name" aria-label="Search" v-model="search">
            </div>
            <div class="col-md-2">
                <button class="btn btn-outline-success" type="submit" @click="Search_Name()">Search</button>
            </div>
        </div>
        <br>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Num.</th>
      <th scope="col">Name</th>
      <th scope="col">Birth Date</th>
      <th scope="col">Gender</th>
      <th scope="col">Address</th>
      <th scope="col">Class</th>
      <th scope="col">Class Group</th>
      <th scope="col">Options</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(dt, id) in students_data" :key="id">
        <td>{{id+1}}</td>
        <td>{{dt.name_students}}</td>
        <td>{{dt.birth_date}}</td>
        <td>{{dt.gender}}</td>
        <td>{{dt.address}}</td>
        <td>{{dt.name_student_class}}</td>
        <td>{{dt.group_student_class}}</td>
        <td>
            <router-link :to="{path: '/students/edit_students/' + dt.id_students}">
                <button class="btn btn-info" type="button"><i class="fas fa-pencil-alt fa-fw"></i></button> 
            </router-link>
            <button v-on:click="Delete(dt.id_students)" class="btn btn-danger" >
                <i class="fas fa-trash-alt fa-fw"></i>
            </button>
        </td>
    </tr>
  </tbody>
    <router-link to="/students/add_students">
        <button class="btn btn-primary mt-3 mb-4">Add Students</button> 
    </router-link>
</table>
    </div>
</template>
<script>
    export default{
        name: 'Students_Data',
        data(){
            return{
                students_data: [],
                search: ''
            }
        },
        methods:{
            GetData: function(){
                this.axios.get('http://localhost:8000/api/students').then(
                    (res)=>{
                        this.students_data = res.data.data
                        console.log(res.data.data)
                    })
            },
            Search_Name: function(){
                this.axios.get('http://localhost:8000/api/search_students/' + this.search).then(
                    (res)=>{
                        this.students_data = res.data.data
                        console.log(res.data.data)
                    })
            },
             Delete(id_students){
                if(confirm('Are you sure you want to delete this data?')){
                    this.axios.delete('http://localhost:8000/api/students/' + id_students)
                    .then(() => {
                        alert('Data Deleted')
                        this.GetData()
                        location.reload();
                    })
                }
        },
       
    },
     mounted(){
            this.GetData()
        } 
}
</script>
