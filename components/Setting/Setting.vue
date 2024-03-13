<template>
    <div class="container_fluid">
      <div>
        <v-card outlined>
          <v-card-text>

            <v-list
              three-line
              subheader
            >
              <v-subheader>Preset</v-subheader>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Theme Color</v-list-item-title>
                  <v-list-item-subtitle>Default</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Tile Color</v-list-item-title>
                  <v-list-item-subtitle>Default</v-list-item-subtitle>
                </v-list-item-content>

              </v-list-item>
              <v-list-item>
              <v-list-item-content>
                  <v-list-item-title>Font Size</v-list-item-title>
                  <v-list-item-subtitle>Default</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list
              three-line
              subheader
            >
              <v-subheader>Database</v-subheader>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="notifications"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>TWL06</v-list-item-title>
                  <v-list-item-subtitle></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="sound"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>CSW19</v-list-item-title>
                  <v-list-item-subtitle></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <!-- <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="widgets"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Auto-add widgets</v-list-item-title>
                  <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item> -->
            </v-list>
          </v-card-text>

        </v-card>
  </div>

    <div style="height:80px;"></div>
    </div>
  </template>
    
  <script>
  import { mdiChevronDoubleLeft } from '@mdi/js';
  import { mdiChevronDoubleRight } from '@mdi/js';
  import { mdiLightbulbOn10 } from '@mdi/js';
  import { mdiRefresh } from '@mdi/js';
  import { mdiSwapHorizontal } from '@mdi/js';
  export default {
    name: "Setting",
    data() {
      return {
        mdiChevronDoubleLeft,
        mdiChevronDoubleRight,
        mdiLightbulbOn10,
        mdiRefresh,
        mdiSwapHorizontal,
        dialog: false,
        dialog2: false,
        dialog3: false,
        notifications: false,
        sound: true,
        widgets: false,
        items: [
          {
            title: 'Click Me',
          },
          {
            title: 'Click Me',
          },
          {
            title: 'Click Me',
          },
          {
            title: 'Click Me 2',
          },
        ],
        select: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' },
        ],
  
      };
    },


    async mounted() {
      // await  this.loadQuiz()
      //   this.initiateQuiz()
    },
    methods: {
    }
  
  }
  </script>
    
  <style lang="scss" scoped>
  .container {
    width: 100%;
  }
  
  .v-application p {
    margin-bottom: 0 !important;
    align-self: center !important;
  }
  
  .v-btn {
    // background-color: rgb(46, 216, 55) !important;
  }
  
  .v-chip {
    padding: 2px;
    width: 37px;
  
    p {
      font-size: 10px !important;
    }
  }
  
  // .v-btn:hover {
  //   background-color: red !important;
  // }
  .logo {
    display: flex;
    justify-content: center;
  
    img {
      width: 30px;
      height: auto;
    }
  }
  
  .toolbar-top {
    background-color: rgb(129, 127, 255);
    padding-top: 12px;
    padding-bottom: 12px;
    color: white;
  }
  
  .toolbar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    background-color: rgb(129, 127, 255);
    z-index: 0;
    // border-radius: 10px;
    padding-right: 12px;
    padding-bottom: 12px;
  }
  
  .v-text-field {
    background-color: azure;
  
    // max-width: 50%;
    input {
      font-size: 0.8rem !important
    }
  }
  
  
  
  :deep(.highlightText) {
    color: green
  }
  
  p {
    font-size: 0.8rem;
  }
  
  .text-banner {
    width: 100%;
    max-width: 500px;
    background-color: rgb(129, 127, 255);
    border-radius: 5px;
    min-height: 10px;
  
    .text-banner-inner {
      display: flex;
      justify-content: center;
      min-height: 10px;
      width: 100%;
      background-color: white;
  
      .v-card {
        // margin-left: 4px;
        // margin-right: 4px;
        z-index: 999;
        display: flex;
        justify-content: center;
        max-width: 50px;
        max-height: 50px;
        width: 11vw;
        height: 11vw;
        background-color: white;
  
        img {
          width: 100%;
        }
      }
    }
  }
  
  .letter-box {
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  
    .letter-piece {
      max-width: 50px;
      width: 100%;
      height: auto;
    }
  }
  
  .answer-box {
    width: 100%;
    max-width: 500px;
    margin-top: 10px;
    border: 1px solid;
    height: 100px;
    overflow: auto;
  
    .answer-box-inner {
      padding: 4px;
      max-height: 100px;
      overflow: auto;
      width: 100%;
      background-color: white;
    }
  }
  
  .v-btn p {
    color: white !important;
  }
  </style>
    