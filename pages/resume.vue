<template>
  <v-layout align-start justify-space-around row fill-height>
    <div>
      <v-flex text-xs-center>Technologies</v-flex>
    </div>
    <div>
      <v-flex text-xs-center>
        Day to day comfort
        <v-list>
          <template v-for="(item, index) in items">
            <v-subheader v-if="item.type === 'day'" :key="index">{{ item.title }}</v-subheader>
          </template>
        </v-list>
      </v-flex>
    </div>
    <div>
      <v-flex text-xs-center>
        Experience with
        <v-list>
          <template v-for="(item, index) in items">
            <v-subheader v-if="item.type === 'experience'" :key="index">{{ item.title }}</v-subheader>
          </template>
        </v-list>
      </v-flex>
    </div>
  </v-layout>
</template>

<script>
export default {
  head() {
    return {
      title: 'manumohan.online - Resume'
    }
  },
  data() {
    return {
      items: [
        { title: 'Angular', type: 'day' },
        { title: 'Karma/Jasmine', type: 'day' },
        { title: 'Node.js', type: 'day' },
        { title: 'Spring Boot', type: 'day' },
        { title: 'CSS/SCSS', type: 'day' },
        { title: 'GIT', type: 'day' },
        { title: 'New Relic/Pager Duty', type: 'day' },
        { title: 'Splunk', type: 'day' },
        { title: 'Adobe Analytics', type: 'day' },
        { title: 'PCF', type: 'day' },
        { title: 'Apigee Edge', type: 'day' },
        { title: 'Bamboo', type: 'day' },
        { title: 'Docker/Kubernetes', type: 'experience' },
        { title: 'AWS/GCP/Azure', type: 'experience' },
        { title: 'Webpack', type: 'experience' },
        { title: 'Vue.js (limited)', type: 'experience' },
        { title: 'React.js (limited)', type: 'experience' },
        { title: 'Cypress', type: 'experience' },
        { title: 'Mocha/Chai/Jest', type: 'experience' },
        { title: 'TLS/Oauth/SAML', type: 'experience' },
        { title: 'Oracle/MySql', type: 'experience' },
        { title: 'Shell scripting', type: 'experience' },
        { title: 'CircleCI/Jenkins', type: 'experience' }
      ]
    }
  }
}
</script>
