<template>
  <div id="jitsi-iframe"></div>
</template>

<script>
export default {
  name: "JitsiIframe",
  data() {
    return {
      api: null,
    };
  },
  mounted() {
    this.api = new JitsiMeetExternalAPI("8x8.vc", { // eslint-disable-line
      roomName: "vpaas-magic-cookie-b34307fd6806488fa62b1f3631405801/TestRoom",
      parentNode: document.querySelector("#jitsi-iframe"),
      jwt: "eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtYjM0MzA3ZmQ2ODA2NDg4ZmE2MmIxZjM2MzE0MDU4MDEvZWM4ODExLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImV4cCI6MTYyNjMzMzk4MiwibmJmIjoxNjI2MzI2Nzc3LCJpc3MiOiJjaGF0Iiwicm9vbSI6IioiLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtYjM0MzA3ZmQ2ODA2NDg4ZmE2MmIxZjM2MzE0MDU4MDEiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJtb2RlcmF0b3IiOnRydWUsIm5hbWUiOiJibG9ja2VyLndpbGxpYW0zIiwiaWQiOiJnb29nbGUtb2F1dGgyfDExNDAwNTg0MDkwNDExMDcyNTE0OSIsImF2YXRhciI6IiIsImVtYWlsIjoiYmxvY2tlci53aWxsaWFtM0BnbWFpbC5jb20ifX19.DoN0-C1UhPQqCUa3JZSM7vuNeVrThFTKUN5CsybsnhbJ6DvCALrEYvxsZQy91dZl_davJojIo-iEbnWgkXJyzgYUDKZ8fPejsuLpkNlZpc9rLMbm3Sh_7F5ylKxmttumCTAI6F1cCCkOiveD9O2QApskBqsHlTfiLfPy568eQTMYQHbn4L4lx7Mm3fK6C7mXkznLMDZpPlr6jGInr6NgknI3G-lc193tNqPQzLKUOjqIFsuI11buR0wH7uZA_GLbdjJaxRkxf8KusgnDmlbB5mr78HZJqanTGGcLY4iJFNKOBXSQDTdktBfD3-bMdnKdKL_Nx2MOebk_oZhaMG9CKQ",
    });
  },
};
</script>

<style scoped>
#jitsi-iframe {
  height: 600px;
}
</style>
