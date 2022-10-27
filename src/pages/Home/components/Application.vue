<template>
  <div id="app">
    <van-dialog
      v-model="showDialog"
      :show-confirm-button="showConfirmButton"
      title="行前教育"
      class="dialog_container"
    >
      <div class="dialog_container_text">
        <p>
          根据国家和省外办相关规定，为加强我校因公出国（境）教师的政治意识、组织意识和纪律意识，特明确相关纪律要求如下:
        </p>
        <p>
          一、请登录中国领事服务网http://cs.mfa.gov.cn,浏览有关注意事项和安全提示，注意了解往访国的安全形势和当地治安状况，如遇突发事件或紧急情况，尽量减少外出或避开人群密集、敏感场所，必要时请报警并寻求中国驻当地使领馆的协助。
        </p>
        <p>
          二、增强大局意识，对外交往中，要忠于使命，认真履责，谨守纪律，切实维护国家以及学校的形象和利益。
        </p>
        <p> 三、自觉遵守保密法律法规，严守保密纪律。增强安全保密意识，未经批准，不得携带涉密载体（包括纸质文件和电磁介质等)；妥善保管内部材料，未经批准，不得对外提供内部文件和资料（如批件、出国（境）申请表、经费情况表、备案表等）；不在非保密场所谈论涉密事项；不得泄露国家秘密和商业秘密。严禁使用个人电脑、手机或其他非涉密载体处理、存储涉密信息。 </p>
        <p> 四、教师出访“在外停留天数”和“出访时间”均有特定的计算方法和严格的规定（根据中办发〔2013〕16号文及省外办规定）。例如，经审批，出访时间：2018年8月1日离境（指中国边检出境章日期）～2018年8月5日回抵境内（指中国边检入境章日期），您选择航班和办理通关手续时，须保证护照（或通行证）上加盖的中国边检出、入境章日期分别为2018-08-01、2018-08-05（注：中国边检出境章日期视作离境日期，中国边检入境章日期视作回抵境内日期；如在京、沪、广、厦等地通关离境或入境通关，离境日期可能不同于离开福州的日期，回抵境内日期也可能不同于回到福州的日期）中国边检出、入境章日期均计入在外停留天数，故此例中，在外停留天数为5天。教师出访严禁超期，即，在外停留天数不得超过批准天数。 </p>
      </div>

      <div class="dialog_container_button">
        <van-button
          type="danger"
          :text="'已阅读并同意('+dialogTime+'s)' "
          color="#b13a3d"
          round
          size="small"
          :disabled="disabled"
          @click="showDialog = false"
        />
      </div>
    </van-dialog>
    <NavBar
      name="返回"
      :nav-bar-title="navBarTitle"
      :left-arrow-status="true"
    />
    <van-form>
      <van-field
        v-model="userInfo.xm"
        required
        name="用户名"
        label="姓名"
        readonly
      />
      <van-field
        required
        name="密码"
        label="性别"
      >
        <template #input>
          <van-radio-group
            :value="userInfo.xbm"
            direction="horizontal"
          >
            <van-radio name="0">
              男
            </van-radio>
            <van-radio name="1">
              女
            </van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="userInfo.csrq"
        readonly
        name="出生日期"
        label="出生日期"
        required
      />
      <van-field
        v-model="userInfo.jgm"
        name="用户名"
        label="籍贯"
        required
        readonly
      />
      <van-field
        v-model="userInfo.mzm"
        name="用户名"
        label="民族"
        required
        readonly
      />
      <van-field
        v-model="userInfo.zzmmm"
        name="用户名"
        label="政治面貌"
        required
        readonly
      />
      <van-field
        v-model="userInfo.zjhm"
        name="用户名"
        label="身份证号码"
        required
        readonly
      />
      <van-field
        name="用户名"
        label="文化程度"
        required
        readonly
      />
      <van-field
        name="用户名"
        label="工作部门"
        required
      />
      <van-field
        v-model="userInfo.przyjszwm"
        name="用户名"
        label="职务"
        required
        readonly
      />
      <van-field
        v-model="userInfo.jtzz"
        name="用户名"
        label="家庭住址"
        required
        readonly
      />
      <van-field
        v-model="userInfo.phone"
        name="用户名"
        label="联系电话"
        required
        readonly
      />
      <van-field
        name="用户名"
        label="紧急联系人"
        placeholder="请输入紧急联系人"
        required
      />
      <van-field
        name="用户名"
        label="紧急联系电话"
        placeholder="请输入紧急联系电话"
        required
      />
      <van-field
        v-model="paperwork"
        label="选择证件"
        placeholder="请选择申请的证书"
        required
        @click="showActionSheet= true"
      />
      <div v-if="showDetail">
        <van-field
          label="申领证照名称"
          required
        />
        <van-field
          label="证照号码"
          required
        />
        <van-field
          label="是否新证"
          required
        />
        <van-field
          v-model="date"
          label="开始时间"
          placeholder="请选择证照开始使用时间"
          required
          @click="showDatetimePicker=true"
        />
      </div>
      <van-action-sheet
        v-model="showActionSheet"
        cancel-text="确定"
        @cancel="confirmPaperwork"
      >
        <van-checkbox-group v-model="result">
          <van-cell-group>
            <van-cell
              v-for="(item, index) in actions"
              :key="index"
              clickable
              :title="item.name"
              @click="toggle(index)"
            >
              <template #right-icon>
                <van-checkbox
                  ref="checkboxes"
                  :name="item"
                />
              </template>
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
      </van-action-sheet>
      <div style="margin: 16px;">
        <van-button
          round
          block
          style="color: #fff; background-color: #b13a3d;"
        >
          提交
        </van-button>
      </div>
      <van-popup
        v-model="showDatetimePicker"
        position="bottom"
        :style="{ width: '100%' }"
      >
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          @confirm="confirmDate(currentDate)"
        />
      </van-popup>
    </van-form>
  </div>
</template>
<script>
import NavBar from '../../../components/NavBar.vue'
export default {
  components: { NavBar },
  data () {
    return {
      navBarTitle: this.$route.meta.title, // 获取头部标题
      showDialog: true, // 显示弹出框
      showConfirmButton: false, // 不显示确认按钮
      dialogTime: 2, // 倒计时开始时间
      disabled: true, // 按钮状态
      showActionSheet: false, // 不显示弹出层
      result: [], // 设置多选框为一组，使多选框生效
      paperwork: '', // 选择申请的证书
      showDatetimePicker: false, // 默认不显示时间选择器
      currentDate: new Date(), // 时间选择器默认选择当前时间
      date: '', // 选择好的日期
      showDetail: false, // 选择证件后的其他信息显示
      userInfo: {}, // 登录后的用户信息
      actions: [{
        name: '外交护照'
      }, {
        name: '公务护照'
      }, {
        name: '普通护照'
      }, {
        name: '港澳通行证'
      }, {
        name: '台湾通行证'
      }, {
        name: '双程证'
      }]
    }
  },
  created () {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo')).user
  },
  mounted () {
    const time = setInterval(() => {
      this.dialogTime--
      if (this.dialogTime === 0) {
        clearInterval(time)
        this.disabled = false
      }
    }, 1000)
  },
  methods: {
    // 点击触发多选框
    toggle (index) {
      this.$refs.checkboxes[index].toggle()
    },
    // 确认选择申请的证书
    confirmPaperwork () {
      this.showActionSheet = false
      this.paperwork = ''
      if (this.paperwork === '') {
        this.showDetail = false
      }
      for (let i = 0; i < this.result.length; i++) {
        this.showDetail = true
        if (i === 0) {
          this.paperwork = this.result[i].name + this.paperwork
        } else {
          this.paperwork = this.paperwork + '、' + this.result[i].name
        }
      }
    },
    // 确认时间
    confirmDate (val) {
      this.showDatetimePicker = false
      const year = val.getFullYear()
      const month = val.getMonth() + 1
      const date = val.getDate()
      this.date = year + '-' + month + '-' + date
    }
  }
}
</script>
<style lang="scss" scoped>
.dialog_container {
  padding: 4vw;

  &_text {
    height: 60vh;
    margin: 4vw 0;
    overflow: auto;
    font-size: 3.46667vw;
    line-height: 1.4;
    text-indent: 2em;
  }

  &_button {
    display: flex;
    justify-content: center;
  }
}

::v-deep .van-dialog__header {
  padding: 0;
  font-size: 4.53333vw;
  line-height: 1.6;
}
</style>
