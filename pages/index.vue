<template>
  <div class="container_fluid">
    <div class="toolbar-top d-flex justify-space-between align-center" v-if="!loadingData & !loadingInitiate">
      <div class="d-inline-flex align-center">
        <div class="logo-top ml-3" @click="isAboutApp = true" style="cursor: pointer;"><img src="@/static/icon.png" /></div>
        <h5 class="text-center ml-2" @click="isAboutApp = true" style="cursor: pointer;">จับสลับอักษรไทย</h5>
      </div>
      <v-divider vertical></v-divider>
      <h5 class="pb-0 mr-2" @click="isAboutDev = true" style="cursor: pointer;">Jollie Roger</h5>

    </div>

    <div v-show="!loadingData & !loadingInitiate & value == 0">
      <!-- home menu -->
      <div style="width: 100%; min-height: 500px; display: flex; flex-direction: column; justify-content: center;"
        v-if="!isShowNewQuiz & !isShowLoadQuiz & !isShowImportFile & !isShowDatabase & !isShowExportFile & !isDevMode & !isShowAnagram">

        <div
          style="display:flex; flex-wrap: wrap; margin: auto; align-items: center; justify-content: center; max-width: 350px; width:100%;">

          <!-- <v-card style="width: 100%; height: 100px; max-width: 100px;" class="ma-2" color="green" dark
            @click="showNewQuiz()" :ripple="false">

            <div
              style="display:flex; justify-content:space-evenly; align-items: center; flex-direction: column; height: 100%;">
              <div><v-icon x-large>{{ mdiHelpBoxMultipleOutline }}</v-icon></div>
              <div>สร้างใหม่</div>
            </div>

          </v-card>
          <v-card style="width: 100%; height: 100px; max-width: 100px;" class="ma-2" color="orange" dark
            @click="showLoadQuiz()" :ripple="false">
            <div
              style="display:flex; justify-content:space-evenly; align-items: center; flex-direction: column; height: 100%;">
              <div><v-icon x-large>{{ mdiFolderFileOutline }}</v-icon></div>
              <div>เล่นต่อ</div>
            </div>

          </v-card>
          <v-card style="width: 100%; height: 100px; max-width: 100px;" class="ma-2" color="red" dark
            @click="showDatabase('list')" :ripple="false">
            <div
              style="display:flex; justify-content:space-evenly; align-items: center; flex-direction: column; height: 100%;">
              <div><v-icon x-large>{{ mdiScriptText }}</v-icon></div>
              <div>รายการ</div>
            </div>

          </v-card>-->
          <v-card style="width: 100%; height: 100px; max-width: 100px;" class="ma-2" color="green" dark
            @click="isShowAnagram = true" :ripple="false">
            <div
              style="display:flex; justify-content:space-evenly; align-items: center; flex-direction: column; height: 100%;">
              <div><v-icon x-large>{{ mdiKeyboardOutline }}</v-icon></div>
              <div>ค้นหา</div>
            </div>

          </v-card>
          <v-card style="width: 100%; height: 100px; max-width: 100px;" class="ml-1 mr-1" color="orange" dark @click="() => {isDevMode = true}" :ripple="false">
            <div
              style="display:flex; justify-content:space-evenly; align-items: center; flex-direction: column; height: 100%;">
              <div><v-icon x-large>{{ mdiAccountQuestionOutline }}</v-icon></div>
              <div>สุ่มคำ</div>
            </div>
          </v-card>
          <v-card style="width: 100%; height: 100px; max-width: 100px;" class="ma-2" color="purple" dark
            @click="showDatabase('lexicon')" :ripple="false">
            <div
              style="display:flex; justify-content:space-evenly; align-items: center; flex-direction: column; height: 100%;">
              <div><v-icon x-large>{{ mdiDatabaseOutline }}</v-icon></div>
              <div>ฐานข้อมูล</div>
            </div>
          </v-card> 


          <v-card style="width: 100%; height: 100px; max-width: 100px;" class="ma-2" color="red" dark :ripple="false">
            <div
              style="display:flex; justify-content:space-evenly; align-items: center; flex-direction: column; height: 100%;">
              <div><v-icon x-large>{{ mdiCogs }}</v-icon></div>
              <div>ตั้งค่า</div>
            </div>

          </v-card>

           <!-- <v-card style="width: 100%; height: 100px; max-width: 100px;" class="ma-2" color="green" dark
            @click="showImportFile()" :ripple="false">
            <div
              style="display:flex; justify-content:space-evenly; align-items: center; flex-direction: column; height: 100%;">
              <div><v-icon x-large>{{ mdiImport }}</v-icon></div>
              <div>นำเข้า</div>
            </div>

          </v-card>
          <v-card style="width: 100%; height: 100px; max-width: 100px;" class="ma-2" color="pink" dark
            @click="showExportFile()" :ripple="false">
            <div
              style="display:flex; justify-content:space-evenly; align-items: center; flex-direction: column; height: 100%;">
              <div><v-icon x-large>{{ mdiExport }}</v-icon></div>
              <div>ส่งออก</div>
            </div>

          </v-card> -->

        </div>

      </div>
      <!-- list & lexicon -->
      <div style="width: 100%; display: flex; flex-direction: column; justify-content: center; min-height: 500px;"
        v-if="isShowDatabase & isHomepage">
        <div class="d-flex justify-center">
          <v-card style="border: 1px dotted; padding: 1rem; " class="" width="100%" max-width="340" outlined
            v-if="dataText == 'lexicon'">
            <div class="d-flex flex-column " style="max-height: 300px; overflow: auto;">
              <div class="d-flex justify-center align-center mb-5"><b>พจนานุกรม</b></div>
              <div class="d-flex justify-space-between align-center">
                <div>
                  <v-icon>{{ mdiDatabaseOutline }}</v-icon>
                  <i>ราชบัณฑิตฯ 2554</i>
                </div>
                <div>

                  <v-btn color="success" @click="createDatabase('royal_thai54')" :disabled="isDisableThai">สร้าง</v-btn>
                  <v-btn color="error" @click="deleteDatabase('royal_thai54')">ลบ</v-btn>
                </div>
              </div>

              <div v-if="loadImportLexicon.length > 0">
                <div class="d-flex justify-space-between align-center mt-2" v-for="item in loadImportLexicon" :key="item">
                  <div>
                    <v-icon>{{ mdiBookOpenPageVariantOutline }}</v-icon>
                    <i>{{ item.replace("lexicon_", "") }}</i>
                  </div>
                  <div>
                    <v-btn color="error" @click="deleteDatabase(item)"><v-icon>{{ mdiDeleteOutline }}</v-icon></v-btn>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-center align-center mt-5">
              <v-btn class="ml-2" width="30%" rounded color="error" @click="cancel()">
                กลับ
              </v-btn>
            </div>
          </v-card>

        </div>
      </div>


      <v-dialog v-model="isConfirmCreate" persistent max-width="340">
        <v-card>
          <v-card-title class="text-h6 text-center pb-0" v-if="!isCommitCreate">สร้างฐานข้อมูล ?</v-card-title>
          <!-- <v-card-text class="text-center pt-5 pb-0" v-if="!isCommitCreate">The word length that exceeds 8 letters will be
            removed. </v-card-text> -->
          <v-card-title class="text-h6 text-center pb-0" v-if="isCommitCreate">{{ statusText }}</v-card-title>


          <v-progress-linear v-model="progress" color="amber" height="25" v-if="isCommitCreate">
            <strong>{{ Math.ceil(progress) }}%</strong>
          </v-progress-linear>
          <v-card-actions class="py-2">
            <v-spacer></v-spacer>
            <v-btn color="deep-purple darken-1" text @click="isConfirmCreate = false" v-if="!isCommitCreate">
              ไม่ใช่
            </v-btn>
            <v-btn color="deep-purple darken-1" text @click="commitCreateDatabase()" v-if="!isCommitCreate">
              ใช่
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="isConfirmDelete" persistent max-width="340">
        <v-card>
          <v-card-title class="text-h6 text-center pb-0" v-if="!isCommitDelete">ต้องการลบฐานข้อมูล ?</v-card-title>
          <v-card-title class="text-h6 text-center pb-0" v-if="isCommitDelete">{{ statusText }}</v-card-title>


          <v-progress-linear color="amber" height="25" indeterminate v-if="isCommitDelete">
          </v-progress-linear>
          <v-card-actions class="py-2">
            <v-spacer></v-spacer>
            <v-btn color="deep-purple darken-1" text @click="isConfirmDelete = false" v-if="!isCommitDelete">
              ไม่ใช่
            </v-btn>
            <v-btn color="deep-purple darken-1" text @click="commitDeleteDatabase()" v-if="!isCommitDelete">
              ใช่
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="isImportError" persistent max-width="340">
        <v-card>
          <v-card-title class="text-h6 text-center pb-0">Invalid Format</v-card-title>
          <v-card-text class="text-center pt-5 pb-0">{{ errorText }}</v-card-text>


          <!-- <v-card-text class="text-center pt-5 pb-0">File must not contain any special characters.</v-card-text> -->



          <v-card-actions class="py-2">
            <v-spacer></v-spacer>
            <v-btn color="deep-purple darken-1" text @click="clearFile()">
              OK
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="isCommitImport" persistent max-width="340">
        <v-card>
          <v-card-title class="text-h6 text-center pb-0">{{ statusText }}</v-card-title>
          <v-progress-linear v-model="importProgress" color="amber" height="25">
            <strong>{{ Math.ceil(importProgress) }}%</strong>
          </v-progress-linear>
          <v-card-actions class="py-2">
            <v-spacer></v-spacer>

            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="isAboutApp" max-width="800">
        <v-card>
          <v-card-title class="text-h6 text-center pb-0">เกี่ยวกับแอพนี้</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="text-left pt-5 pb-0">จับสลับอักษรไทย V.1.0</v-card-text>
          <v-card-text class="text-left pt-5 pb-0">1. สามารถใช้งานได้ฟรี</v-card-text>
          <v-card-text class="text-left pb-0">2. ปรับแต่งรูปแบบ</v-card-text>
          <v-card-text class="text-left pb-0">3. โหมดจับสลับตัวอักษร</v-card-text>
          <v-card-text class="text-left pb-0">4. โหมดสุ่มคำสำหรับฝึกทักษะ</v-card-text>
          <v-card-actions class="py-2">
            <v-spacer></v-spacer>

            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="isAboutDev" max-width="800">
        <v-card>
          <v-card-title class="text-h6 text-center pb-0">เกี่ยวกับผู้พัฒนา</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="text-left pt-5 pb-0">Jollie Roger</v-card-text>
          <v-card-text class="text-left pt-5 pb-0">ช่องทางติดต่อ: jetaroon@gmail.com</v-card-text>
          <v-card-text class="text-left pt-5 pb-0">โปรแกรมเมอร์ฝึกหัด ที่มีความต้องการสร้างสรรค์แอพที่หลากหลาย หากต้องการสนับสนุนหรือติชม สามารถติดต่อมาได้ตามข้อมูลข้างต้น</v-card-text>
          <v-card-actions class="py-2">
            <v-spacer></v-spacer>

            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>



      <div v-if="isBlur">
        <v-overlay>
          <h1>Checking File...</h1>

        </v-overlay>
      </div>
      <DevMode v-if="isDevMode"  @returnHomepage="returnHomepage"/>
      <Anagram v-if="isShowAnagram"  @returnHomepage="returnHomepage"/>

    </div>



    <div class="navation-drawer" v-if="!loadingData & !loadingInitiate & isHomepage"> </div>
  </div>
</template>

<script>
import { Browser } from '@capacitor/browser';
import { Clipboard } from '@capacitor/clipboard';
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Dialog } from '@capacitor/dialog';
import Dexie from 'dexie';
import { mdiHelp } from '@mdi/js';
import { mdiFolderFileOutline } from '@mdi/js';
import { mdiAccountQuestionOutline } from '@mdi/js';
import { mdiScriptText } from '@mdi/js';
import { mdiCounter } from '@mdi/js';
import { mdiImport } from '@mdi/js';
import { mdiExport } from '@mdi/js';
import { mdiBookOpenPageVariantOutline, mdiConsoleNetworkOutline } from '@mdi/js'
import { mdiCheckOutline } from '@mdi/js';
import { mdiHelpBoxMultipleOutline } from '@mdi/js';
import { mdiCogs } from '@mdi/js';
import { mdiAccountBoxMultipleOutline } from '@mdi/js';
import { mdiDeleteOutline } from '@mdi/js';
import { mdiDatabaseOutline } from '@mdi/js';
import { mdiKeyboardOutline } from '@mdi/js';
import { royal_thai54_db } from '@/static/royal_thai54_db.js'
import { twl06_db } from '@/static/twl06_db.js';
import { csw21_db } from '@/static/csw21_db.js';
import { nwl2022_db } from '@/static/nwl2022_db.js';
export default {
  async asyncData({ context }) {
    const testdata = context;
    return {
      testdata,
      loadingInitiate: false,
      loadingData: true,
      isHomepage: true,
      isShowNewQuiz: false,
      isShowLoadQuiz: false,
      isShowImportFile: false,
      isShowExportFile: false,
      isShowDatabase: false,
      isShowAnagram: false,
      isImportError: false,
      isImportEmpty: true,
      isExportEmpty: true,
      isPreviewExport: false,
      textPreview: "",
      quizName: "",
      isEmpty: true,
      isLoadEmpty: true,
      isErrorText: false,
      isErrorText2: false,
      isConfirmCreate: false,
      isCommitCreate: false,
      isConfirmDelete: false,
      isCommitDelete: false,
      isCommitImport: false,
      isCopy: false,
      isDownloadError: false,
      genType: "",
      selectDatabase: "",
      selectLexicon: "",
      listLexicon: [],
      selectType: "2 letters word",
      listType: ["2 letters word", "3 letters word", "4 letters word", "5 letters word",
        "6 letters word",
        "7 letters word",
        "8 letters word"
      ],
      selectImportType: "List",
      importType: ["List",
        "Lexicon",
        "Save File"
      ],
      importList: null,
      selectExportType: "Save File",
      exportType: ["Save File",
        // "Statistics"
      ],
      exportFile: null,
      exportName: "",
      isLoadingExport: false,
      isImportErrorTxt: false,
      loadList: [],
      loadImportList: [],
      loadImportLexicon: [],
      loadImportSave: [],
      resultList: [],
      twllist: [],
      itemActive: "",
      csw19list: [],
      csw21list: [],
      file: null,
      fileName: "",
      twlCount: 0,
      cswCount: 0,
      value: 0,
      mdiHelp,
      mdiFolderFileOutline,
      mdiAccountQuestionOutline,
      mdiScriptText,
      mdiCounter,
      mdiImport,
      mdiExport,
      mdiBookOpenPageVariantOutline,
      mdiCheckOutline,
      mdiHelpBoxMultipleOutline,
      mdiCogs,
      mdiAccountBoxMultipleOutline,
      mdiDeleteOutline,
      mdiDatabaseOutline,
      mdiKeyboardOutline,
      isDisableThai: false,
      isDisableCSW21: false,
      isDisableNWL2022: false,
      progress: 0,
      importProgress: 0,
      statusText: 'กำลังสร้าง...',
      errorText: "",
      isBlur: false,
      platform: "",
      dataText: "",
      sortType: "Random",
      isDevMode: false,
      isAboutApp: false,
      isAboutDev: false
    };
  },
  watch: {
    quizName(val) {
      if (val == "") {
        this.isEmpty = true
      }

      else if (val.length > 10) {
        this.isEmpty = true
      }

      else if (this.listLexicon.length == 0) {
        this.isEmpty = true
      }
      else {
        this.isEmpty = false
      }
    },

    itemActive(val) {
      if (val == "") {
        this.isLoadEmpty = true
      }
      else {
        this.isLoadEmpty = false
      }
    },
    selectImportType(val) {
      if (val) {
        this.fileName = ""
        this.file = null
      }
      if (this.fileName == "csw21" || this.fileName == "twl06" || this.fileName == "nwl2022") {
        this.isImportEmpty = true
        this.isImportErrorTxt = true
      }
      else if (localStorage.getItem(val.toLowerCase() + "_" + this.fileName) != null & val != "Save File") {
        this.isImportEmpty = true
        this.isImportErrorTxt = true
      }
      else if (localStorage.getItem(this.fileName) != null & val == "Save File") {
        this.isImportEmpty = true
        this.isImportErrorTxt = true
      }
      else if (localStorage.getItem(val.toLowerCase() + "_" + this.fileName) == null & val != "Save File") {
        this.isImportErrorTxt = false
      }
      else if (localStorage.getItem(this.fileName) == null & val == "Save File") {
        this.isImportErrorTxt = false
      }

      if (this.fileName != "" & this.fileName.length <= 10 & this.file != null & localStorage.getItem(val.toLowerCase() + "_" + this.fileName) == null & val != "Save File" & this.fileName != "csw21" & this.fileName != "twl06" & this.fileName != "nwl2022") {
        this.isImportEmpty = false
      }
      if (this.fileName != "" & this.fileName.length <= 10 & this.file != null & localStorage.getItem(this.fileName) == null & val == "Save File" & this.fileName != "csw21" & this.fileName != "twl06" & this.fileName != "nwl2022") {
        this.isImportEmpty = false
      }


    },

    fileName(val) {
      if (val == "" || val.length > 10 || this.file == null) {
        this.isImportEmpty = true

      }
      if (val == "csw21" || val == "twl06" || val == "nwl2022") {
        this.isImportEmpty = true
        this.isImportErrorTxt = true
      }

      else if (localStorage.getItem(this.selectImportType.toLowerCase() + "_" + val) != null & this.selectImportType != 'Save File') {
        this.isImportEmpty = true
        this.isImportErrorTxt = true
      }
      else if (localStorage.getItem(val) != null & this.selectImportType == 'Save File') {
        this.isImportEmpty = true
        this.isImportErrorTxt = true
      }
      else if (localStorage.getItem(this.selectImportType.toLowerCase() + "_" + val) == null & this.selectImportType != 'Save File') {
        this.isImportErrorTxt = false
      }
      else if (localStorage.getItem(val) == null & this.selectImportType == 'Save File') {
        this.isImportErrorTxt = false
      }
      if (val != "" & val.length <= 10 & this.file != null & localStorage.getItem(this.selectImportType.toLowerCase() + "_" + val) == null & this.selectImportType != 'Save File' & val != "csw21" & val != "twl06" & val != "nwl2022") {
        this.isImportEmpty = false
      }
      if (val != "" & val.length <= 10 & this.file != null & localStorage.getItem(val) == null & this.selectImportType == 'Save File' & val != "csw21" & val != "twl06" & val != "nwl2022") {
        this.isImportEmpty = false
      }
    },
    file(val) {
      if (this.fileName == "csw21" || this.fileName == "twl06" || this.fileName == "nwl2022") {
        this.isImportEmpty = true
        this.isImportErrorTxt = true
      }
      else if (localStorage.getItem(this.selectImportType.toLowerCase() + "_" + this.fileName) != null & this.selectImportType != 'Save File') {
        this.isImportEmpty = true
        this.isImportErrorTxt = true
      }
      else if (localStorage.getItem(this.fileName) != null & this.selectImportType == 'Save File') {
        this.isImportEmpty = true
        this.isImportErrorTxt = true
      }
      else if (localStorage.getItem(this.selectImportType.toLowerCase() + "_" + this.fileName) == null & this.selectImportType != 'Save File') {
        this.isImportErrorTxt = false
      }
      else if (localStorage.getItem(this.fileName) == null & this.selectImportType == 'Save File') {
        this.isImportErrorTxt = false
      }
      if (this.fileName != "" & this.fileName.length <= 10 & val != null & localStorage.getItem(this.selectImportType.toLowerCase() + "_" + this.fileName) == null & this.selectImportType != 'Save File' & this.fileName != "csw21" & this.fileName != "twl06" & this.fileName != "nwl2022") {
        this.isImportEmpty = false
      }
      if (this.fileName != "" & this.fileName.length <= 10 & val != null & localStorage.getItem(this.fileName) == null & this.selectImportType == 'Save File' & this.fileName != "csw21" & this.fileName != "twl06" & this.fileName != "nwl2022") {
        this.isImportEmpty = false
      }
    }


  },
  async mounted() {
    this.loadingInitiate = true;
    this.loadingInitiate = false;
    this.loadingData = false;

    this.platform = Capacitor.getPlatform()

    localStorage.getItem('db_royal_thai54') != null ? this.isDisableThai = true : this.isDisableThai = false
    localStorage.getItem('db_csw21') != null ? this.isDisableCSW21 = true : this.isDisableCSW21 = false
    localStorage.getItem('db_nwl2022') != null ? this.isDisableNWL2022 = true : this.isDisableNWL2022 = false
  },
  methods: {
    async showNewQuiz() {
      this.listLexicon = []
      this.selectType = "2 letters word"
      this.listType = ["2 letters word", "3 letters word", "4 letters word", "5 letters word",
        "6 letters word",
        "7 letters word",
        "8 letters word"
      ]
      this.isShowNewQuiz = true
      let key = Object.keys(localStorage).filter(p => p.includes("db_") || p.includes("lexicon_"))
      key.forEach(p => this.listLexicon.push(p.replace("db_", "")))
      let listkey = Object.keys(localStorage).filter(p => p.includes("list_"))
      listkey.forEach(p => this.listType.push(p))
      console.log(this.listType)


      if (key) {
        this.selectLexicon = this.listLexicon[0]
      } else {
        this.selectLexicon = ""
      }

    },
    async showLoadQuiz() {
      this.isShowLoadQuiz = true
      let key = Object.entries(localStorage).map(p => { return { key: p[0], value: p[1] } })

      this.loadList = key.filter(p => !p.key.includes("db_") & !p.key.includes("list") & !p.key.includes("lexicon"))

    },

    async showImportFile() {
      this.isShowImportFile = true

    },

    async showExportFile() {
      this.isShowExportFile = true
      this.isExportEmpty = true
      let key = Object.entries(localStorage).map(p => { return { key: p[0], value: p[0] + ":" + p[1] } })

      this.loadList = key.filter(p => !p.key.includes("db_") & !p.key.includes("list") & !p.key.includes("lexicon"))

    },



    async showDatabase(text) {
      this.dataText = text
      this.isShowDatabase = true
      let key = Object.keys(localStorage)

      this.loadImportList = key.filter(p => !p.includes("db_") & p.includes("list_"))
      this.loadImportSave = key.filter(p => !p.includes("db_") & p.includes("savefile_"))
      this.loadImportLexicon = key.filter(p => !p.includes("db_") & p.includes("lexicon_"))

    },

    async checkFile(name) {
      console.log(name)
      this.exportName = name
      this.isExportEmpty = false


    },

    async exportFileName() {
      this.isLoadingExport = true
      this.isExportEmpty = true
      let name = this.exportName.slice(0, this.exportName.indexOf(":"))
      let first_slice = this.exportName.slice(this.exportName.indexOf(":") + 1)
      let lexicon = first_slice.slice(0, first_slice.indexOf("_"))
      let list = this.exportName.slice(this.exportName.lastIndexOf("_") + 1)
      const db = new Dexie(name);
      db.version(1).stores({
        data: 'Id, Word, Leftover, Correct, isDone',
      });
      await db.open()
      const data = await db.data.where('Word').notEqual("").sortBy('Id')
      this.exportFile = {
        "name": name,
        "lexicon": lexicon,
        "list": list,
        "data": data
      }
      console.log(this.exportFile)
      const jsonString = JSON.stringify(this.exportFile, null, 2);
      this.textPreview = jsonString
      this.isLoadingExport = false
      this.isExportEmpty = false
      this.isPreviewExport = true
      db.close()

    },

    async copyToClipboard() {
      await Clipboard.write({
        string: this.textPreview
      });
      this.isCopy = true
    },

    async downloadFile() {
      let name = this.exportName.slice(0, this.exportName.indexOf(":"))
      const blob = new Blob([this.textPreview], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      if (this.platform == 'web') {
        const downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = name + ".txt";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        URL.revokeObjectURL(url);
      }
      else {
        try {
          const test = await Filesystem.writeFile({
            path: name + '.txt',
            data: this.textPreview,
            directory: Directory.Documents,
            encoding: Encoding.UTF8
          });
          await Dialog.alert({
            title: 'Complete',
            message: `../Documents/${name}.txt`,
          });
        } catch (e) {
          await Dialog.alert({
            title: 'Error',
            message: e,
          });
          console.error(e);
        }

      }

    },

    async cancel() {
      this.isErrorText = false
      this.isShowLoadQuiz = false
      this.isShowNewQuiz = false
      this.isShowImportFile = false
      this.isShowExportFile = false
      this.isShowDatabase = false
      this.isShowAnagram = false
      this.itemActive = ""
      this.quizName = ""
      this.fileName = ""
      this.file = null
      this.selectImportType = "List"
      this.sortType = "Random"

    },
    async generate() {
      let key = localStorage.getItem(this.quizName)
      if (key != null || this.quizName == "csw21" || this.quizName == "twl06" || this.quizName == "nwl2022") {
        this.isErrorText = true

      }
      else if (this.selectType.includes("list_")) {
        this.genType = "custom"
        this.isErrorText = false
        this.isHomepage = false
      }
      else {
        this.genType = "new"
        this.isErrorText = false
        this.isHomepage = false
      }

    },

    async load() {
      this.genType = "load"
      let list = localStorage.getItem(this.itemActive)
      this.quizName = this.itemActive
      if (list.includes("lexicon_")) {
        this.selectLexicon = list.slice(0, list.lastIndexOf("_"))
        this.selectType = list.slice((list.lastIndexOf("_") + 1))
      }
      else {
        this.selectLexicon = list.slice(0, list.indexOf("_"))
        this.selectType = list.slice((list.indexOf("_") + 1))
      }
      this.isHomepage = false

    },
    returnHomepage(value) {
      this.isShowNewQuiz = false
      this.isShowLoadQuiz = false
      this.isShowAnagram = false
      this.genType = ""
      this.quizName = ""
      this.selectLexicon = "TWL06"
      this.selectType = "2 letters word"
      this.itemActive = ""
      this.isLoadEmpty = true
      this.isDevMode = false
      this.isHomepage = value
      this.sortType = "Random"
    },


    async clearFile() {
      this.isImportError = false
      this.fileName = ""
      this.file = null
    },

    async createDatabase(lexicon) {
      this.selectDatabase = lexicon
      this.isConfirmCreate = true

    },
    async commitCreateDatabase() {
      this.isCommitCreate = true


      if (this.selectDatabase == 'royal_thai54') {
        royal_thai54_db.open()
        let result = require(`@/static/royal_thai54.json`)
        let list = result.map((p,i) => { return {
          Id: p.Id,
          Word: p.Word,
          WordReverse: p.WordReverse,
          WordFilter: p.WordFilter,
          Number: p.WordFilter.length
        }})
        console.log(list)
        let divide = Math.ceil(list.length / 7)
        this.progress = 0
        await royal_thai54_db.data.bulkAdd(list.slice(0, (1 * divide)))
        this.progress = 14
          await royal_thai54_db.data.bulkAdd(list.slice((1 * divide), (2 * divide)))
          this.progress = 28
          await royal_thai54_db.data.bulkAdd(list.slice((2 * divide), (3 * divide)))
          this.progress = 42
          await royal_thai54_db.data.bulkAdd(list.slice((3 * divide), (4 * divide)))
          this.progress = 56
          await royal_thai54_db.data.bulkAdd(list.slice((4 * divide), (5 * divide)))
          this.progress = 70
          await royal_thai54_db.data.bulkAdd(list.slice((5 * divide), (6 * divide)))
          this.progress = 84
          await royal_thai54_db.data.bulkAdd(list.slice((6 * divide), (7 * divide)))

        royal_thai54_db.close()
        this.progress = 100
        this.statusText = "เสร็จสิ้น..."
        localStorage.setItem("db_" + this.selectDatabase, this.selectDatabase)
        this.isDisableThai = true
        setTimeout(() => {
          this.isConfirmCreate = false
        }, 1000)
        setTimeout(() => {
          this.isCommitCreate = false
          this.progress = 0
          this.statusText = "กำลังสร้าง..."

        }, 1200)
      }
    },


    async deleteDatabase(lexicon) {
      console.log(lexicon)
      this.selectDatabase = lexicon
      this.isConfirmDelete = true


    },
    async commitDeleteDatabase() {
      this.isCommitDelete = true
      this.statusText = "กำลังลบ..."



      if (this.selectDatabase.includes("list_") || this.selectDatabase.includes("lexicon_")) {
        await Dexie.delete(this.selectDatabase);
        localStorage.removeItem(this.selectDatabase)
      }
      if (this.selectDatabase.includes("savefile_")) {
        await Dexie.delete(this.selectDatabase.replace("savefile_", ""));
        localStorage.removeItem(this.selectDatabase.replace("savefile_", ""))

      }
      else {
        await Dexie.delete(this.selectDatabase);
        localStorage.removeItem("db_" + this.selectDatabase)
      }
      this.statusText = "เสร็จสิ้น..."
      let key = Object.keys(localStorage)
      let allkey = Object.entries(localStorage).map(p => { return { key: p[0], value: p[1] } })
      this.loadImportList = key.filter(p => !p.includes("db_") & p.includes("list_"))
      this.loadImportSave = key.filter(p => !p.includes("db_") & p.includes("savefile_"))
      this.loadImportLexicon = key.filter(p => !p.includes("db_") & p.includes("lexicon_"))
      this.loadList = allkey.filter(p => !p.key.includes("db_") & !p.key.includes("list") & !p.key.includes("lexicon"))


      if (this.selectDatabase == 'csw21') {
        this.isDisableCSW21 = false
      }
      if (this.selectDatabase == 'royal_thai54') {
        this.isDisableThai = false
      }
      if (this.selectDatabase == 'nwl2022') {
        this.isDisableNWL2022 = false
      }
      setTimeout(() => {
        this.isConfirmDelete = false
        this.itemActive = ""
      }, 1000)
      setTimeout(() => {
        this.isCommitDelete = false
        this.statusText = "กำลังสร้าง..."


      }, 1200)



    }


  }
}
</script>

<style lang="scss" scoped>
.v-overlay {
  // background-color: #817FFF;
}

.item-active {
  background-color: #817FFF !important;
}

.logo {
  display: flex;
  justify-content: center;

  img {
    width: 80px;
    height: auto;
  }
}

.logo-top {
  display: flex;
  justify-content: center;

  img {
    width: 30px;
    height: auto;
  }
}

.toolbar-top {
  background-color: #817FFF;
  padding-top: 12px;
  padding-bottom: 12px;
  color: white;
}

.toolbar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  background-color: #817FFF;
  z-index: 0;
  // border-radius: 10px;
  padding-right: 12px;
  padding-bottom: 12px;
}

.navation-drawer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  background-color: #817FFF;
  color: white;
  bottom: 0;
  min-height: 24px;
}
</style>
