(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{F6JX:function(a,t,e){"use strict";e.r(t);e("07d7"),e("rB9j"),e("hByQ"),e("FZtP");var n=e("IF94"),o=e("mwM1"),r=e("GUe+"),l=e("fnif"),s=e("y5zP"),i=e("X3y2"),d=e("m10P"),u={components:{BCard:n.a,BOverlay:o.a,BButton:r.a,Datatable:l.a,Pembelajaran:s.a,AnggotaRombel:i.a},data:function(){return{loading:!1,loading_modal:!1,isBusy:!0,fields:[{key:"nama",label:"Nama",sortable:!0,thClass:"text-center"},{key:"wali_kelas",label:"Wali Kelas",sortable:!0,thClass:"text-center"},{key:"tingkat",label:"Tingkat",sortable:!0,thClass:"text-center",tdClass:"text-center"},{key:"jurusan_sp",label:"Program/Kompetensi Keahlian",sortable:!1,thClass:"text-center"},{key:"kurikulum",label:"Kurikulum",sortable:!1,thClass:"text-center"},{key:"anggota_rombel",label:"Anggota Rombel",sortable:!1,thClass:"text-center",tdClass:"text-center"},{key:"pembelajaran",label:"Pembelajaran",sortable:!1,thClass:"text-center",tdClass:"text-center"}],items:[],meta:{},current_page:1,per_page:10,search:"",sortBy:"tingkat",sortByDesc:!1,title:"",rombongan_belajar_id:"",list_anggota:[],list_pembelajaran:[],data_kelompok:[],data_guru:[],form:{nama:{},guru_pengajar_id:{},kelompok_id:{},no_urut:{}},placement:"top",jml_data:0,jml_simpan:0}},watch:{jml_data:function(a){this.hitung()}},created:function(){this.loadPostsData()},methods:{loadPostsData:function(){var a=this;this.isBusy=!0;var t=this.current_page;this.$http.get("/rombongan-belajar",{params:{jenis_rombel:16,user_id:this.user.user_id,sekolah_id:this.user.sekolah_id,semester_id:this.user.semester.semester_id,periode_aktif:this.user.semester.nama,page:t,per_page:this.per_page,q:this.search,sortby:this.sortBy,sortbydesc:this.sortByDesc?"DESC":"ASC"}}).then((function(t){var e=t.data.data;a.isBusy=!1,a.items=e.data,a.meta={total:e.total,current_page:e.current_page,per_page:e.per_page,from:e.from,to:e.to,role_id:a.role_id,roles:t.data.roles}}))},handlePerPage:function(a){this.per_page=a,this.loadPostsData()},handlePagination:function(a){this.current_page=a,this.loadPostsData()},handleSearch:function(a){this.search=a,this.loadPostsData()},handleSort:function(a){a.sortBy&&(this.sortBy=a.sortBy,this.sortByDesc=a.sortDesc,this.loadPostsData())},handleAnggota:function(a){var t=this;this.loading=!0,this.rombongan_belajar_id=a,this.$http.post("/rombongan-belajar/anggota-rombel",{rombongan_belajar_id:a}).then((function(a){t.loading=!1,t.loading_modal=!1;var e=a.data;t.list_anggota=e.data,t.title="Anggota Rombel Kelas "+e.rombel.nama,d.a.$emit("open-modal-anggota-rombel")})).catch((function(a){console.log(a)}))},handlePembelajaran:function(a){var t=this;this.loading=!0,this.rombongan_belajar_id=a,this.$http.post("/rombongan-belajar/pembelajaran",{rombongan_belajar_id:a,sekolah_id:this.user.sekolah_id,semester_id:this.user.semester.semester_id}).then((function(e){t.loading=!1,t.loading_modal=!1;var n=e.data;t.list_pembelajaran=n.data,t.jml_data=t.list_pembelajaran.length;var o={},r={},l={},s={};t.list_pembelajaran.forEach((function(a,t){o[a.pembelajaran_id]=a.nama_mata_pelajaran,r[a.pembelajaran_id]=a.guru_pengajar_id,l[a.pembelajaran_id]=a.kelompok_id,s[a.pembelajaran_id]=a.no_urut})),t.form.nama=o,t.form.guru_pengajar_id=r,t.form.kelompok_id=l,t.form.no_urut=s,t.data_guru=n.guru,t.data_kelompok=n.Kelompok,t.title="Pembelajaran Kelas "+n.rombel.nama,d.a.$emit("open-modal-pembelajaran",a)})).catch((function(a){console.log(a)}))},handleOk:function(a){a.preventDefault(),this.handleSubmit()},handleSubmit:function(){var a=this;this.loading_modal=!0,this.$http.post("/rombongan-belajar/simpan-pembelajaran",this.form).then((function(t){a.loading_modal=!1;var e=t.data;a.$swal({icon:e.icon,title:e.title,text:e.text,customClass:{confirmButton:"btn btn-success"}}).then((function(t){a.loading_modal=!0,a.handlePembelajaran(a.rombongan_belajar_id)}))}))},hitung:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;"start"==a&&(this.jml_simpan=this.jml_simpan+1,this.jml_simpan===this.jml_data&&(this.jml_simpan=0,this.handlePembelajaran(this.rombongan_belajar_id)))},swalConfirm:function(a,t,e,n){var o=this;this.$swal({title:"Apakah Anda yakin?",text:a,icon:"warning",showCancelButton:!0,confirmButtonText:"Yakin!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1"},buttonsStyling:!1,allowOutsideClick:function(){return!o.$swal.isLoading()}}).then((function(a){a.value&&(o.loading_modal=!0,o.$http.post(t,e).then((function(a){var t=a.data;o.$swal({icon:t.icon,title:t.title,text:t.text,customClass:{confirmButton:"btn btn-success"}}).then((function(a){"keluar"==n&&o.handleKeluarkan(),"hapus-pembelajaran"==n&&o.handlePembelajaran(o.rombongan_belajar_id)}))})))}))},keluarkan:function(a){var t={anggota_rombel_id:a};this.swalConfirm("Tindakan ini tidak dapat dikembalikan!","/rombongan-belajar/keluarkan",t,"keluar")},handleKeluarkan:function(){this.handleAnggota(this.rombongan_belajar_id)},handleHapus:function(a){this.rombongan_belajar_id=a.rombongan_belajar_id;var t={pembelajaran_id:a.pembelajaran_id,rombongan_belajar_id:a.rombongan_belajar_id};this.swalConfirm("Aksi ini akan menghapus Guru Pengajar dan Kelompok!","/rombongan-belajar/hapus-pembelajaran",t,"hapus-pembelajaran")}}},c=(e("P0Qx"),e("KHd+")),m=Object(c.a)(u,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card",[e("datatable",{attrs:{loading:a.loading,isBusy:a.isBusy,items:a.items,fields:a.fields,meta:a.meta},on:{per_page:a.handlePerPage,pagination:a.handlePagination,search:a.handleSearch,sort:a.handleSort,getAnggota:a.handleAnggota,getPembelajaran:a.handlePembelajaran}}),a._v(" "),e("anggota-rombel",{attrs:{title:a.title,loading_modal:a.loading_modal,list_anggota:a.list_anggota},on:{keluarkan:a.keluarkan}}),a._v(" "),e("pembelajaran",{attrs:{title:a.title,loading_modal:a.loading_modal,list_pembelajaran:a.list_pembelajaran,form:a.form,data_guru:a.data_guru,data_kelompok:a.data_kelompok},on:{hapus:a.handleHapus,getPembelajaran:a.handlePembelajaran}})],1)}),[],!1,null,null,null);t.default=m.exports},P0Qx:function(a,t,e){"use strict";e("s0zf")},fnif:function(a,t,e){"use strict";var n=e("LvDl"),o=e.n(n),r=e("oVt+"),l=e("sove"),s=e("R5cT"),i=e("KaE5"),d=e("AeMN"),u=e("JtJI"),c=e("GUe+"),m=e("mwM1"),p=e("Snq/"),b=e.n(p),_={components:{BRow:r.a,BCol:l.a,BFormInput:s.a,BTable:i.a,BSpinner:d.a,BPagination:u.a,BButton:c.a,BOverlay:m.a,vSelect:b.a},props:{items:{type:Array,required:!0},fields:{type:Array,required:!0},meta:{required:!0},isBusy:{type:Boolean,default:function(){return!0}},loading:{type:Boolean,default:function(){return!1}}},data:function(){return{sortBy:null,sortDesc:!1}},watch:{sortBy:function(a){this.$emit("sort",{sortBy:this.sortBy,sortDesc:this.sortDesc})},sortDesc:function(a){this.$emit("sort",{sortBy:this.sortBy,sortDesc:this.sortDesc})}},methods:{getAnggota:function(a){this.$emit("getAnggota",a)},getPembelajaran:function(a){this.$emit("getPembelajaran",a)},loadPerPage:function(a){this.$emit("per_page",this.meta.per_page)},changePage:function(a){this.$emit("pagination",a)},search:o.a.debounce((function(a){this.$emit("search",a)}),500)}},g=e("KHd+"),h=Object(g.a)(_,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("b-row",[e("b-col",{staticClass:"mb-2",attrs:{md:"4"}},[e("v-select",{attrs:{options:[10,25,50,100],clearable:!1,searchable:!1},on:{input:a.loadPerPage},model:{value:a.meta.per_page,callback:function(t){a.$set(a.meta,"per_page",t)},expression:"meta.per_page"}})],1),a._v(" "),e("b-col",{attrs:{md:"4","offset-md":"4"}},[e("b-form-input",{attrs:{placeholder:"Cari data..."},on:{input:a.search}})],1)],1),a._v(" "),e("b-overlay",{attrs:{show:a.loading,rounded:"",opacity:"0.6",size:"lg","spinner-variant":"warning"}},[e("b-table",{attrs:{responsive:"",bordered:"",striped:"",items:a.items,fields:a.fields,"sort-by":a.sortBy,"sort-desc":a.sortDesc,"show-empty":"",busy:a.isBusy},on:{"update:sortBy":function(t){a.sortBy=t},"update:sort-by":function(t){a.sortBy=t},"update:sortDesc":function(t){a.sortDesc=t},"update:sort-desc":function(t){a.sortDesc=t}},scopedSlots:a._u([{key:"empty",fn:function(t){return[e("p",{staticClass:"text-center"},[a._v("Tidak ada data untuk ditampilkan")])]}},{key:"table-busy",fn:function(){return[e("div",{staticClass:"text-center text-danger my-2"},[e("b-spinner",{staticClass:"align-middle"}),a._v(" "),e("strong",[a._v("Loading...")])],1)]},proxy:!0},{key:"cell(wali_kelas)",fn:function(t){return[a._v("\n        "+a._s(t.item.wali_kelas.nama_lengkap)+"\n      ")]}},{key:"cell(jurusan_sp)",fn:function(t){return[a._v("\n        "+a._s(t.item.jurusan_sp?t.item.jurusan_sp.nama_jurusan_sp:"")+"\n      ")]}},{key:"cell(kurikulum)",fn:function(t){return[a._v("\n        "+a._s(t.item.kurikulum?t.item.kurikulum.nama_kurikulum:"")+"\n      ")]}},{key:"cell(anggota_rombel)",fn:function(t){return[e("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(e){return a.getAnggota(t.item.rombongan_belajar_id)}}},[a._v("Anggota Rombel")])]}},{key:"cell(pembelajaran)",fn:function(t){return[e("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(e){return a.getPembelajaran(t.item.rombongan_belajar_id)}}},[a._v("Pembelajaran")])]}}])})],1),a._v(" "),e("b-row",{staticClass:"mt-2"},[e("b-col",{attrs:{md:"6"}},[e("p",[a._v("Menampilkan "+a._s(a.meta.from?a.meta.from:0)+" sampai "+a._s(a.meta.to)+" dari "+a._s(a.meta.total)+" entri")])]),a._v(" "),e("b-col",{attrs:{md:"6"}},[e("b-pagination",{attrs:{"total-rows":a.meta.total,"per-page":a.meta.per_page,align:"right","aria-controls":"dw-datatable"},on:{change:a.changePage},model:{value:a.meta.current_page,callback:function(t){a.$set(a.meta,"current_page",t)},expression:"meta.current_page"}})],1)],1)],1)}),[],!1,null,null,null);t.a=h.exports},s0zf:function(a,t,e){var n=e("vtDY");"string"==typeof n&&(n=[[a.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,o);n.locals&&(a.exports=n.locals)},vtDY:function(a,t,e){var n=e("JPst"),o=e("nm7J");(t=n(!1)).i(o),t.push([a.i,".swal2-container .swal2-popup {\n  border-radius: 0.428rem;\n  padding-bottom: 1.5rem;\n}\n.swal2-container .swal2-popup .swal2-close:focus {\n  outline: none;\n  box-shadow: none;\n}\n.swal2-container .swal2-popup .swal2-content {\n  color: #6e6b7b;\n}\n.swal2-container .swal2-popup .swal2-title {\n  font-size: 1.35rem;\n  font-weight: inherit;\n  color: #5e5873;\n}\n.swal2-container .swal2-popup button.swal2-confirm:focus {\n  box-shadow: none;\n}\n.swal2-container .swal2-popup input.swal2-input {\n  height: 2.714rem;\n  font-size: 0.9rem;\n  padding: 0.438rem 1rem;\n  color: #6e6b7b;\n  border-color: #d8d6de;\n  border-radius: 0.357rem;\n  line-height: 1.45;\n}\n.swal2-container .swal2-popup input.swal2-input:focus {\n  border-color: #7367f0 !important;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n.swal2-container .swal2-popup .swal2-select {\n  width: 100%;\n}\n.swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step {\n  background-color: #7367f0;\n}\n.swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line, .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {\n  background-color: #b3adf7;\n}\n.swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step-line {\n  background-color: #7367f0;\n}\n.swal2-container .swal2-popup pre {\n  min-height: 1.35rem;\n  margin-top: 0.5rem;\n}\n.swal2-container .swal2-popup .swal2-footer {\n  border-color: #ebe9f1;\n  color: #6e6b7b;\n}\n.dark-layout .swal2-container .swal2-popup .swal2-title {\n  color: #d0d2d6;\n}\n.dark-layout .swal2-container .swal2-modal {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-title {\n  color: #d0d2d6;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-icon-text {\n  color: inherit;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-left, .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-right, .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-fix, .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-animate-success-icon {\n  background-color: #283046 !important;\n}\n.dark-layout .swal2-container .swal2-modal input.swal2-input {\n  border-color: #3b4253;\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-content, .dark-layout .swal2-container .swal2-modal .swal2-html-container {\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-modal pre, .dark-layout .swal2-container .swal2-modal code {\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-input {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-footer {\n  border-color: #3b4253;\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-validation-message {\n  background-color: #161d31;\n  color: #b4b7bd;\n}\nhtml[dir=rtl] .swal2-rtl .swal2-close {\n  left: 0;\n  right: auto;\n}",""]),a.exports=t},y5zP:function(a,t,e){"use strict";var n=e("mwM1"),o=e("Hrou"),r=e("C9gC"),l=e("okd0"),s=e("bPaI"),i=e("Ki4g"),d=e("CAmi"),u=e("R5cT"),c=e("5scn"),m=e("m10P"),p=e("Snq/"),b=e.n(p),_=e("4AkS"),g={components:{BOverlay:n.a,BTableSimple:o.a,BThead:r.a,BTbody:l.a,BTh:s.a,BTr:i.a,BTd:d.a,BFormInput:u.a,vSelect:b.a},directives:{"b-modal":c.a,Ripple:_.a},props:{form:{type:Object,required:!0},list_pembelajaran:{type:Array,required:!0},data_guru:{type:Array,required:!0},data_kelompok:{type:Array,required:!0},title:{type:String,default:function(){return""}}},data:function(){return{showPembelajaranModal:!1,table_class:"pb-2",loading_modal:!1,rombongan_belajar_id:null}},created:function(){m.a.$on("open-modal-pembelajaran",this.handleEvent)},methods:{handleEvent:function(a){this.loading_modal=!1,this.rombongan_belajar_id=a,this.showPembelajaranModal=!0},hapus:function(a,t){this.$emit("hapus",{pembelajaran_id:a,rombongan_belajar_id:t})},handleOpen:function(){this.table_class="pb-5"},handleClose:function(){this.table_class="pb-2"},handleOk:function(a){a.preventDefault(),this.handleSubmit()},handleSubmit:function(){var a=this;this.loading_modal=!0,this.$http.post("/rombongan-belajar/simpan-pembelajaran",this.form).then((function(t){a.loading_modal=!1;var e=t.data;a.$swal({icon:e.icon,title:e.title,text:e.text,customClass:{confirmButton:"btn btn-success"}}).then((function(t){a.loading_modal=!0,a.$emit("getPembelajaran",a.rombongan_belajar_id)}))}))}}},h=e("KHd+"),f=Object(h.a)(g,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-modal",{attrs:{size:"xl",title:a.title,"body-class":a.table_class},on:{ok:a.handleOk},model:{value:a.showPembelajaranModal,callback:function(t){a.showPembelajaranModal=t},expression:"showPembelajaranModal"}},[e("b-overlay",{attrs:{show:a.loading_modal,rounded:"",opacity:"0.6",size:"lg","spinner-variant":"danger"},scopedSlots:a._u([{key:"modal-footer",fn:function(t){var n=t.ok,o=t.cancel;return[e("b-overlay",{attrs:{show:a.loading_modal,rounded:"",opacity:"0.6",size:"sm","spinner-variant":"secodary"}},[e("b-button",{on:{click:function(a){return o()}}},[a._v("Tutup")])],1),a._v(" "),e("b-overlay",{attrs:{show:a.loading_modal,rounded:"",opacity:"0.6",size:"sm","spinner-variant":"primary"}},[e("b-button",{attrs:{variant:"primary"},on:{click:function(a){return n()}}},[a._v("Simpan")])],1)]}}])},[e("b-table-simple",{class:a.table_class,attrs:{hover:"",bordered:""}},[e("b-thead",[e("b-tr",[e("b-th",{staticClass:"text-center"},[a._v("No")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("Mata Pelajaran")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("ID Mapel")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("Guru Mapel (Dapodik)")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("Guru Pengajar")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("Kelompok")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("No Urut")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("Reset")])],1)],1),a._v(" "),e("b-tbody",[a._l(a.list_pembelajaran,(function(t,n){return[e("b-tr",{class:{"bg-warning":t.induk_pembelajaran_id}},[e("b-td",{staticClass:"text-center"},[a._v(a._s(n+1))]),a._v(" "),e("b-td",[e("b-form-input",{model:{value:a.form.nama[t.pembelajaran_id],callback:function(e){a.$set(a.form.nama,t.pembelajaran_id,e)},expression:"form.nama[pembelajaran.pembelajaran_id]"}})],1),a._v(" "),e("b-td",{staticClass:"text-center"},[e("b-form-input",{attrs:{value:t.mata_pelajaran_id,disabled:""}})],1),a._v(" "),e("b-td",{staticClass:"text-center"},[e("b-form-input",{attrs:{value:t.guru.nama_lengkap,disabled:""}})],1),a._v(" "),e("b-td",[e("v-select",{attrs:{options:a.data_guru,reduce:function(a){return a.guru_id},label:"nama_lengkap",placeholder:"== Pilih Guru Pengajar =="},on:{open:a.handleOpen,close:a.handleClose},scopedSlots:a._u([{key:"no-options",fn:function(t){t.search,t.searching,t.loading;return[a._v("\n                  Tidak ada data untuk ditampilkan\n                ")]}}],null,!0),model:{value:a.form.guru_pengajar_id[t.pembelajaran_id],callback:function(e){a.$set(a.form.guru_pengajar_id,t.pembelajaran_id,e)},expression:"form.guru_pengajar_id[pembelajaran.pembelajaran_id]"}})],1),a._v(" "),e("b-td",[e("v-select",{attrs:{options:a.data_kelompok,reduce:function(a){return a.kelompok_id},label:"nama_kelompok",placeholder:"== Pilih Kelompok =="},scopedSlots:a._u([{key:"no-options",fn:function(t){t.search,t.searching,t.loading;return[a._v("\n                  Tidak ada data untuk ditampilkan\n                ")]}}],null,!0),model:{value:a.form.kelompok_id[t.pembelajaran_id],callback:function(e){a.$set(a.form.kelompok_id,t.pembelajaran_id,e)},expression:"form.kelompok_id[pembelajaran.pembelajaran_id]"}})],1),a._v(" "),e("b-td",[e("b-form-input",{model:{value:a.form.no_urut[t.pembelajaran_id],callback:function(e){a.$set(a.form.no_urut,t.pembelajaran_id,e)},expression:"form.no_urut[pembelajaran.pembelajaran_id]"}})],1),a._v(" "),e("b-td",{staticClass:"text-center"},[t.kelompok_id&&t.no_urut?[e("a",{staticClass:"text-danger",on:{click:function(e){return a.hapus(t.pembelajaran_id,t.rombongan_belajar_id)}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-trash"}})],1)]:[a._v("\n                -\n              ")]],2)],1)]}))],2)],1)],1)],1)}),[],!1,null,null,null);t.a=f.exports}}]);