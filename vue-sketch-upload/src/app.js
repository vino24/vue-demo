import Vue from 'vue';
import FileUpload from './FileUpload.vue';

Vue.config.debug = false;
Vue.config.silent = false;
Vue.config.async = false;
Vue.config.devtools = true;

Vue.filter('formatSize', function(size) {
  if (size > 1024 * 1024 * 1024 * 1024) {
    return (size / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' TB';
  } else if (size > 1024 * 1024 * 1024) {
    return (size / 1024 / 1024 / 1024).toFixed(2) + ' GB';
  } else if (size > 1024 * 1024) {
    return (size / 1024 / 1024).toFixed(2) + ' MB';
  } else if (size > 1024) {
    return (size / 1024).toFixed(2) + ' KB';
  }
  return size.toString() + ' B';
});


new Vue({
  el:'#app',
  components: {
    FileUpload:FileUpload,
  },
  data: {
    accept: '*',
    size: 1024 * 1024 * 10,
    multiple: false,
    extensions: 'sketch',
    files: [],
    upload: {},
    drop: true,
    auto: false,
    info: '',
  },

  compiled() {
    this.upload = this.$refs.upload;
    // this.upload.request = {
    //   headers: {
    //     "X-Csrf-Token": "xxxx",
    //   },
    //   data: {
    //     "_csrf_token": "xxxxxx",
    //   },
    // };
    this.files = this.$refs.upload.files;
  },
  // methods: {
  //   remove(file) {
  //     this.$refs.upload.files.$remove(file);
  //   },
  // },
  events: {
    addFileUpload(file, component) {
      // console.log('addFileUpload');
      this.files = this.$refs.upload.files;
      this.info = '';
      // if (this.auto) {
      //   component.active = true;
      // }
    },
    fileUploadProgress(file, component) {
      // console.log('fileUploadProgress ' + file.progress);
    },
    afterFileUpload(file, component) {
      this.info = file.data.info || (typeof file.data === 'string' ? file.data : file.error);
      this.files = [];
    },
    beforeFileUpload(file, component) {
      // console.log('beforeFileUpload');
    },
  }
});
