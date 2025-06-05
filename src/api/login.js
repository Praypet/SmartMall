import request from '@/utils/request'

export const getPicCode = () => request.get('/captcha/image')

export const getMsgCode = (captchaCode, captchaKey, mobile) =>
  request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })

export const isLogin = (mobile, smsCode) =>
  request.post('/passport/login', {
    form: {
      isParty: false,
      partyData: {},
      mobile,
      smsCode
    }
  })
