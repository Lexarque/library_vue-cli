<template>
    <div class="container">
        <router-view></router-view>
        <h3 class="mt-3">Add Students</h3>
        <br>
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Name :</label>
                <input type="text" class="form-control" id="name" v-model="name_students" required>
            </div>
            <div class="mb-3">
                <label for="birth_date" class="form-label">Birth Date :</label>
                <input type="date" class="form-control" id="birth_date" v-model="birth_date" required>
            </div>
            <div class="mb-3">
                <label for="gender" class="form-label">Gender :</label>
                <select id="gender" class="form-select form-select-md mb-3" aria-label=".form-select-lg example" v-model="gender" required>
                    <!-- v-model="gender" v-for="(dt, id) in students_class" :key="id" -->
                    <!-- {{dt.student_class_name}} - {{dt.student_class_group}} -->
                    <option v-for="(dt,id) in gender_list" :key=id v-bind:value="dt.key">{{dt.val}}</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Address :</label>
                <input type="text" class="form-control" id="address" v-model="address" required>
            </div>
             <div class="mb-3">
                <label for="gender" class="form-label">Students Class :</label>
                <select id="gender" class="form-select form-select-md mb-3" aria-label=".form-select-lg example" v-model="id_student_class" required>
                    <option v-for="(dt,id) in students_class" :key=id v-bind:value="dt.id_student_class">{{dt.name_student_class}} = {{dt.group_student_class}}</option>
                </select>
            </div>
            <button @click="add()" type="button" class="btn btn-primary">Add</button>
        </form>
    </div>
</template>
<script>
     export default {
        data(){
            return{
                name_students: '',
                birth_date: '',
                gender_list: [{key:"M", val:"Male"}, {key:"F", val:"Female"}],
                gender: '',
                address: '',
                id_student_class: '',
                students_class: []
            }
        },
        methods: {
            getStudentClass: function(){
                this.axios.get("http://localhost:8000/api/student_class")
                .then(res => {
                    this.students_class = res.data.data
                    console.log(res)
                })
            },
             add: function(){
                let data = {
                    name_students: this.name_students,
                    birth_date: this.birth_date,
                    gender: this.gender,
                    address: this.address,
                    id_student_class: this.id_student_class
                }
                this.axios.post("http://localhost:8000/api/add_students", data)
                .then(res => {
                    alert('Successfully added data');
                    console.log(res)
                    this.$router.push('/students')
                })
            },
        },
        mounted(){
                this.getStudentClass();
            }
    }
</script>
