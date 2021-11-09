// specific meeting details like time of day, length, etc
<template>
    <!-- <div class="unselected-field" style="display: inline-block;" id="selectCountry"> -->
    <label for="time-of-day">time of day: <select name="time-of-day" id="time-of-day">
        <option value="morning">morning</option> 
        <option value="afternoon">afternoon</option>
        <option value="evening/night">evening/night</option>
        </select>
    </label>

    <label for="time-length">time length: <select name="time-length" id="time-length">
        <option value="30min">30 min</option> 
        <option value="1hr">1 hr</option>
        <option value="2hr">2 hrs</option>
        <option value="3hr">3 hrs</option>
        <option value="5hr">5 hrs</option>
        </select>
    </label>

    <label for="date-range">date range: <select name="date-range" id="date-range">
        <option value="1week">1 week</option> 
        <option value="2weeks">2 weeks</option>
        <option value="custom">custom</option>
        </select>
    </label>
    <div><input type="date" name="meeting-date" id="meeting-date" required/> - <input type="date" name="meeting-date" id="meeting-date" required/></div>
    
    <label for="meeting-spot">meeting spot: 
        <input name="meeting-spot" id="meeting-spot" />
    </label>
    
</template>

<script>

    export default {
        name: "TimeMatchMeetingDetails"
    }

</script>

<style scoped> 

    label {
        margin: 5px 0px 5px;
    }
</style> 