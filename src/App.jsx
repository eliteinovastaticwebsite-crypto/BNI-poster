import React from "react";

import mdPhoto from "./assets/md-photo.png";
import bniLogo from "./assets/bni-logo.png";
import companyLogo from "./assets/company-logo.png";
import bannerBg from "./assets/MobileApplicationDevelopment.jpeg";
import bodyBg from "./assets/bgbody.jpg";

const MD_PHOTO = mdPhoto;

const FEATURES = [
  "E Commerce Apps","Social Networking Apps",
  "Educational Apps","Health & Fitness Apps",
  "Travel & Tourism Apps","Productive Apps",
  "Real Estate Apps","Event & Ticket Booking Apps",
  "Job & Recruitment Apps","Food & Restaurant Apps",
  "Hospitality Apps","News & Magazine Apps",
];
const WHY_US = [
  "SMS Whatsapp API","Payment Integration API",
  "Map & Location API","Social Login API",
  "Travel API",
];
const PROCESS = [
  "Business Automation","Time Saving",
  "Improve Customer Experience","Increase Sales & Revenue",
  "Better Data Management","Strong Customer Engagement",
  "Cost Reduction","Business Growth and Scalability",
];

const s = o => o;

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        body{background:#06090f}

        .poster{font-family:'Plus Jakarta Sans',sans-serif;width:555px;height:794px;position:relative;overflow:hidden;display:flex;flex-direction:column;background:rgba(0,0,0,0.2);box-shadow:0 0 0 1px rgba(0,60,200,.18),0 22px 72px rgba(0,40,180,.55),0 5px 20px rgba(0,0,0,.45);}

        /* BANNER */
        .banner{position:relative;height:215px;flex-shrink:0;overflow:hidden;z-index:2;}
        .banner::before{content:'';position:absolute;inset:0;z-index:3;pointer-events:none;background:repeating-linear-gradient(-52deg,transparent,transparent 20px,rgba(255,255,255,.03) 20px,rgba(255,255,255,.03) 21px);}
        .b-overlay{position:absolute;inset:0;z-index:1;background:linear-gradient(118deg,rgba(0,10,40,.93) 0%,rgba(0,22,80,.86) 35%,rgba(0,44,160,.72) 65%,rgba(0,55,180,.35) 100%);}
        .b-glow{position:absolute;top:-48px;right:-48px;width:243px;height:243px;z-index:2;pointer-events:none;background:radial-gradient(circle,rgba(50,150,255,.22) 0%,transparent 65%);}
        .b-wave{position:absolute;bottom:-1px;left:0;right:0;height:30px;background:#eaf3ff;clip-path:polygon(0 100%,100% 100%,100% 38%,60% 0%,0 100%);z-index:5;}

        .manager-wrap{position:absolute;right:0;bottom:-60px;width:174px;height:258px;z-index:10;}
        .manager-wrap img{width:100%;height:100%;object-fit:cover;object-position:top center;-webkit-mask-image:linear-gradient(to right,transparent 0%,rgba(0,0,0,.6) 15%,black 35%),linear-gradient(to top,transparent 0%,transparent 5%,black 28%);mask-image:linear-gradient(to right,transparent 0%,rgba(0,0,0,.6) 15%,black 35%),linear-gradient(to top,transparent 0%,transparent 5%,black 28%);-webkit-mask-composite:destination-in;mask-composite:intersect;filter:brightness(1.07) contrast(1.06);border-radius:8px;}
        .manager-wrap::before{content:'';position:absolute;inset:-8px;border-radius:16px;background:radial-gradient(circle,rgba(0,140,255,.25),transparent 50%);z-index:-1;}
        .manager-wrap::after{content:'';position:absolute;bottom:0;left:0;right:0;height:73px;background:linear-gradient(to top,rgba(234,243,255,1) 0%,rgba(234,243,255,.7) 40%,transparent 100%);pointer-events:none;}

        .logo-circle{width:49px;height:49px;border-radius:50%;flex-shrink:0;background:linear-gradient(145deg,#fff 0%,#c0d8ff 100%);display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 2px rgba(255,255,255,.6),0 5px 18px rgba(0,80,255,.55);overflow:hidden;border:1.5px solid rgba(255,255,255,.75);}
        .logo-circle img{width:100%;height:100%;object-fit:cover;}

        /* BODY */
        .body{flex:1;position:relative;overflow:hidden;z-index:1;display:flex;flex-direction:column;padding:12px 20px 12px 20px;}
        .body-bg-white{position:absolute;inset:0;z-index:1;background:rgba(255,255,255,0.08);}

        /* BODY HEADING */
        .body-heading-wrap{margin-bottom:8px;position:relative;z-index:2;}
        .body-heading-line{width:28px;height:2.5px;background:linear-gradient(90deg,#0050ff,#72c6ff);border-radius:2px;margin-bottom:4px;}
        .body-heading-main{font-size:13px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#002eaa;line-height:1.2;}
        .body-heading-sub{font-size:10px;font-weight:600;letter-spacing:0.10em;text-transform:uppercase;color:#3a6adc;margin-top:2px;}

        /* BODY ROW — increased gap to push right box further */
        .body-row{display:flex;gap:24px;flex:1;position:relative;z-index:2;align-items:stretch;justify-content:space-between;}

        /* BLUE FEAT BOX — fixed width */
        .feat-box{
          width:210px;
          flex-shrink:0;
          background:linear-gradient(175deg,#001050 0%,#001a70 30%,#0044cc 65%,#0062ff 100%);
          border:1px solid rgba(120,190,255,.25);
          border-radius:8px;
          padding:0 0 0 0;
          box-shadow:0 6px 28px rgba(0,30,140,.55),inset 0 1px 0 rgba(255,255,255,.10);
          position:relative;
          z-index:2;
          overflow:hidden;
          transform:skewX(-6deg);
          margin-left: 13px;
        }
        .feat-box-header{
          background:linear-gradient(90deg,#000c3a 0%,#001560 60%,#001e80 100%);
          padding:8px 16px 7px 16px;
          margin-bottom:5px;
          border-bottom:1px solid rgba(80,160,255,.20);
          position:relative;
        }
        .feat-box-header::after{
          content:'';position:absolute;bottom:-1px;left:0;right:0;height:1px;
          background:linear-gradient(90deg,transparent,rgba(100,180,255,.35),transparent);
        }
        .feat-box-inner{padding:0 16px 0 16px;}
        .feat-box::before{
          content:'';position:absolute;top:-30px;left:-30px;width:120px;height:120px;
          background:radial-gradient(circle,rgba(255,255,255,.12) 0%,transparent 65%);pointer-events:none;
        }
        .feat-box-title{
          font-family:'Cormorant Garamond',serif;
          font-size:14px;font-weight:700;color:#fff;
          text-shadow:0 1px 8px rgba(0,0,0,.4);display:block;
        }
        .feat-list{display:flex;flex-direction:column;gap:5.5px;}
        .feat-dot{width:5px;height:5px;border-radius:50%;flex-shrink:0;background:linear-gradient(135deg,#72c6ff,#fff);box-shadow:0 0 4px rgba(114,198,255,.6);}

        /* PARA WRAP — increased width to fit content fully */
        .para-wrap{
          width:200px;
          flex-shrink:0;
          display:flex;
          flex-direction:column;
          gap:8px;
          align-self:stretch;
        }

        /* Parallelogram — wider to show full text */
        .para{
          transform:skewX(-9deg);
          border-radius:6px;
          overflow:hidden;
          position:relative;
          box-shadow:0 6px 22px rgba(0,40,200,.32);
        }
        .para-blue{flex:0 0 auto;}
        .para-dark{flex:1;}
        .para-inner{padding:8px 14px 8px 16px;height:100%;}
        .para-blue{background:linear-gradient(138deg,#0034c0 0%,#0062ff 60%,#1a80ff 100%);border:1px solid rgba(120,190,255,.30);}
        .para-dark{background:linear-gradient(138deg,#001870 0%,#0042cc 100%);border:1px solid rgba(80,160,255,.20);}
        .para::before{content:'';position:absolute;top:-18px;left:-18px;width:60px;height:60px;pointer-events:none;background:radial-gradient(circle,rgba(255,255,255,.16) 0%,transparent 68%);}

        .para-heading{
          font-family:'Cormorant Garamond',serif;
          font-size:12px;font-weight:700;text-transform:uppercase;
          letter-spacing:0.08em;padding-bottom:4px;margin-bottom:5px;display:block;
        }

        .para-item{display:flex;gap:5px;align-items:center;margin-bottom:4px;}
        .para-item-txt{font-size:10px;line-height:1.25;white-space:normal;word-break:break-word;}
        .step-badge{width:14px;height:14px;border-radius:50%;flex-shrink:0;background:linear-gradient(135deg,#72c6ff,#fff);color:#001a66;font-size:6.5px;font-weight:700;display:flex;align-items:center;justify-content:center;}

        /* FOOTER */
        .footer{height:154px;flex-shrink:0;display:flex;position:relative;overflow:visible;z-index:2;border-top:1.5px solid rgba(100,178,255,.22);background:linear-gradient(135deg,#000e36 0%,#00247a 52%,#0038b8 100%);}
        .footer::before{content:'';position:absolute;inset:0;z-index:1;pointer-events:none;background:repeating-linear-gradient(-52deg,transparent,transparent 15px,rgba(255,255,255,.022) 15px,rgba(255,255,255,.022) 16px);}
        .bni-round{position:absolute;top:11px;right:16px;width:44px;height:44px;border-radius:50%;background:#fff;border:2.5px solid #fff;box-shadow:0 3px 16px rgba(0,0,0,.42),0 0 0 1px rgba(0,60,200,.20);display:flex;align-items:center;justify-content:center;z-index:30;overflow:hidden;}
        .bni-round img{width:88%;height:88%;object-fit:contain;}
        .f-col{flex:1;padding:11px 11px 10px 15px;position:relative;z-index:2;}
        .f-divider{width:1px;background:rgba(255,255,255,.10);flex-shrink:0;margin:10px 0;position:relative;z-index:2;}
        .f-label{font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#62b0ff;display:flex;align-items:center;gap:4px;margin-bottom:6px;}
        .accent-bar{height:3px;flex-shrink:0;background:linear-gradient(90deg,#000e36,#0038c8,#0062ff,#72c6ff,#fff,#72c6ff,#0062ff,#0038c8,#000e36);}
      `}</style>

      <div style={s({minHeight:"100vh",background:"#06090f",display:"flex",alignItems:"center",justifyContent:"center",padding:"32px 16px"})}>
        <div className="poster">

          {/* BANNER */}
          <div className="banner">
            <div style={s({position:"absolute",inset:0,zIndex:0,backgroundImage:`url(${bannerBg})`,backgroundSize:"cover",backgroundPosition:"center center"})} />
            <div className="b-overlay" />
            <div className="b-glow" />

            <div style={s({position:"relative",zIndex:6,padding:"13px 16px 0"})}>
              <div style={s({display:"flex",alignItems:"center",gap:9,marginBottom:7})}>
                <div className="logo-circle">
                  <img src={companyLogo} alt="Logo" />
                </div>
                <div>
                  <h1 style={s({fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:700,color:"#ffffff",letterSpacing:"0.025em",lineHeight:1.1,textShadow:"0 2px 20px rgba(0,100,255,.70)"})}>
                    Eliteinova Tech Pvt Ltd
                  </h1>
                  <div style={s({height:2,marginTop:3,background:"linear-gradient(90deg,#72c6ff,rgba(255,255,255,.4),transparent)",borderRadius:2})} />
                </div>
              </div>

              <div style={s({display:"inline-flex",alignItems:"center",gap:6,background:"rgba(255,255,255,.12)",backdropFilter:"blur(6px)",border:"1px solid rgba(100,200,255,.35)",borderRadius:4,padding:"3px 10px",marginBottom:8})}>
                <div style={s({width:5,height:5,borderRadius:"50%",background:"#72c6ff",flexShrink:0})} />
                <p style={s({fontSize:11,fontWeight:700,letterSpacing:"0.24em",textTransform:"uppercase",color:"#a8ddff"})}>Mobile App Developer</p>
              </div>

              <div style={s({background:"linear-gradient(90deg,rgba(0,80,200,.42),rgba(0,40,120,.08))",borderLeft:"2.5px solid #72c6ff",borderRadius:"0 5px 5px 0",padding:"6px 11px",maxWidth:232})}>
                <h3 style={s({fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:16,fontWeight:600,color:"rgba(255,255,255,.96)",lineHeight:1.4,textShadow:"0 1px 10px rgba(0,0,0,.4)",whiteSpace:"nowrap"})}>
                  "Your Business, now in Every&nbsp;<span style={s({color:"#70dfff",textDecoration:"underline",textDecorationColor:"rgba(112,223,255,.4)",textUnderlineOffset:3})}>Customer's Pocket</span>"
                </h3>
              </div>
            </div>

            <div className="manager-wrap">
              <img src={MD_PHOTO} alt="Managing Director" />
            </div>
            <div className="b-wave" />
          </div>

          {/* BODY */}
          <div className="body">
            <div style={s({position:"absolute",inset:0,zIndex:0,backgroundImage:`url(${bodyBg})`,backgroundSize:"cover",backgroundPosition:"center",pointerEvents:"none"})} />
            <div className="body-bg-white" />
            <div style={s({position:"absolute",top:-48,right:-48,width:243,height:243,zIndex:1,pointerEvents:"none",background:"radial-gradient(circle,rgba(100,180,255,.15) 0%,transparent 70%)"})} />

            {/* TWO-LINE HEADING */}
            <div className="body-heading-wrap">
              <div className="body-heading-line" />
              <p className="body-heading-main">We Are Specialised In Commercial Apps</p>
              <p className="body-heading-sub">— Static &amp; Dynamic Mobile Apps —</p>
            </div>

            {/* BODY ROW */}
            <div className="body-row">

              {/* BLUE BOX — text slants WITH the parallelogram shape */}
              <div className="feat-box">
                <div className="feat-box-header">
                  <span className="feat-box-title">We Are Support With You</span>
                </div>
                <div className="feat-box-inner">
                  <div className="feat-list">
                    {FEATURES.map((f,i)=>(
                      <div key={i} style={s({display:"flex",gap:7,alignItems:"center"})}>
                        <div className="feat-dot" />
                        <span style={s({fontSize:12,color:"rgba(220,238,255,.95)",lineHeight:1.5,fontWeight:500,whiteSpace:"nowrap"})}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* TWO PARALLELOGRAMS — increased width to show full text */}
              <div className="para-wrap">

                <div className="para para-blue">
                  <div className="para-inner">
                    <span className="para-heading" style={s({color:"#fff",borderBottom:"1px solid rgba(255,255,255,.22)"})}>Save Your Time</span>
                    {WHY_US.map((item,i)=>(
                      <div key={i} className="para-item">
                        <span style={s({color:"#aaddff",fontSize:7,flexShrink:0})}>◆</span>
                        <span className="para-item-txt" style={s({color:"rgba(255,255,255,.92)"})}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="para para-dark">
                  <div className="para-inner">
                    <span className="para-heading" style={s({color:"#7ec8ff",borderBottom:"1px solid rgba(100,180,255,.20)"})}>Benefits</span>
                    {PROCESS.map((step,i)=>(
                      <div key={i} className="para-item">
                        <div className="step-badge">{i+1}</div>
                        <span className="para-item-txt" style={s({color:"rgba(255,255,255,.90)"})}>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="footer">
            <div className="bni-round">
              <img src={bniLogo} alt="BNI" style={s({width:"100%",height:"100%",objectFit:"contain"})} />
            </div>

            <svg style={s({position:"absolute",inset:0,zIndex:0,opacity:.15,pointerEvents:"none"})} viewBox="0 0 555 154" preserveAspectRatio="xMidYMid slice">
              <g stroke="#4488ff" strokeWidth="0.7" fill="none">
                <circle fill="#4488ff" cx="30" cy="25" r="2.5"/><circle fill="#4488ff" cx="110" cy="16" r="1.8"/><circle fill="#4488ff" cx="195" cy="32" r="2.5"/><circle fill="#4488ff" cx="290" cy="12" r="1.8"/><circle fill="#4488ff" cx="385" cy="28" r="2.5"/><circle fill="#4488ff" cx="490" cy="15" r="1.8"/>
                <circle fill="#4488ff" cx="60" cy="78" r="1.8"/><circle fill="#4488ff" cx="152" cy="65" r="2.5"/><circle fill="#4488ff" cx="238" cy="88" r="1.8"/><circle fill="#4488ff" cx="335" cy="62" r="2.5"/><circle fill="#4488ff" cx="428" cy="82" r="1.8"/><circle fill="#4488ff" cx="510" cy="70" r="2.5"/>
                <circle fill="#4488ff" cx="40" cy="132" r="2.5"/><circle fill="#4488ff" cx="138" cy="126" r="1.8"/><circle fill="#4488ff" cx="270" cy="140" r="2.5"/><circle fill="#4488ff" cx="402" cy="130" r="1.8"/><circle fill="#4488ff" cx="500" cy="136" r="2.5"/>
                <line x1="30" y1="25" x2="110" y2="16"/><line x1="110" y1="16" x2="195" y2="32"/><line x1="195" y1="32" x2="290" y2="12"/><line x1="290" y1="12" x2="385" y2="28"/><line x1="385" y1="28" x2="490" y2="15"/>
                <line x1="30" y1="25" x2="60" y2="78"/><line x1="110" y1="16" x2="152" y2="65"/><line x1="195" y1="32" x2="238" y2="88"/><line x1="290" y1="12" x2="335" y2="62"/><line x1="385" y1="28" x2="428" y2="82"/><line x1="490" y1="15" x2="510" y2="70"/>
                <line x1="60" y1="78" x2="40" y2="132"/><line x1="152" y1="65" x2="138" y2="126"/><line x1="238" y1="88" x2="270" y2="140"/><line x1="335" y1="62" x2="402" y2="130"/><line x1="428" y1="82" x2="500" y2="136"/>
                <line x1="40" y1="132" x2="138" y2="126"/><line x1="138" y1="126" x2="270" y2="140"/><line x1="270" y1="140" x2="402" y2="130"/><line x1="402" y1="130" x2="500" y2="136"/>
              </g>
            </svg>

            <div className="f-col">
              <div className="f-label">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#62b0ff"/></svg>
                Location
              </div>
              <p style={s({fontSize:13,fontWeight:700,color:"#e0f0ff",marginBottom:5})}>Eliteinova Tech Pvt Ltd</p>
              <p style={s({fontSize:10.5,color:"rgba(190,220,255,.78)",lineHeight:1.75})}>
                No. 78, 1st Street, Kumaran Colony<br/>
                Vadapalani, Chennai – 600 026,<br/>
                Tamil Nadu, India
              </p>
            </div>
            <div className="f-divider" />
            <div className="f-col" style={s({paddingTop:11,paddingBottom:65})}>
              <div className="f-label" style={s({marginTop:18})}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#62b0ff"/></svg>
                Contact Us
              </div>
              {[
                {icon:"🌐",txt:"https://www.eliteinovatechpvtltd.com/"},
                {icon:"📞",txt:"+91 9940200736"},
                {icon:"✉️",txt:"eliteinovatechpvtltd@gmail.com"},
              ].map((c,i)=>(
                <div key={i} style={s({display:"flex",gap:6,alignItems:"center",marginBottom:5})}>
                  <span style={s({fontSize:10})}>{c.icon}</span>
                  <span style={s({fontSize:10,color:"rgba(195,225,255,.90)"})}>{c.txt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="accent-bar" />
        </div>
      </div>
    </>
  );
}