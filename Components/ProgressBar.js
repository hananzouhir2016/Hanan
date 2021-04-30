import { StatusBar } from 'expo-status-bar';
import React ,{ Component } from 'react';
import { Animated,StyleSheet,Dimensions,} from 'react-native';

import Svg, { G, Defs, ClipPath, Rect, Stop, Line,Polyline,LinearGradient, Animate, Polygon } from 'react-native-svg';

//import Animated, { Easing } from 'react-native-reanimated';
const { width, height } = Dimensions.get('window');
const AnimatedRect = Animated.createAnimatedComponent(Rect);
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

class ProgressBar extends Component {
 
    state = {
      initAnim: new Animated.Value(0),
    };
  
    componentDidMount() {
      Animated.timing(
        // Animate over time
        this.state.initAnim,
        {
          toValue: 1,
          duration: 3,
          useNativeDriver:false,
        }
      ).start();
    }
  
    render() {
      const { initAnim } = this.state;
      let animateWidth = initAnim.interpolate({
        inputRange: [0, 0.2],
        outputRange: ['0', '50'],
      });
  

  

      return ( 
  
        <AnimatedSvg   x="0" y="0"  viewBox="0 0 612 792" enable-background="new 0 0 612 792">
        
        <G>
	<G>
  
  <Rect x="92.2" y="468" opacity="0.16" fill="#C49A6C" enable-background="new    " width="316.8" height="75.4"/>
    <AnimatedRect
          height="75.4"
          width={animateWidth}
         fill="#C2B59B"
         x="90" y="470"
         style={{overflow: 'hidden',
       }}
        />
    
	</G>
	
	<Polyline opacity="0.16" fill="#C49A6C" enable-background="new"  points="409.1,542 409.1,573.3 473.8,504.9 409.1,436.4 
		409.1,467.8 	"/>
	<G>
		
  <LinearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="247.85" y1="160.95" x2="267.35" y2="160.95" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="155.5" y="469.8" opacity="0.95" fill="url(#SVGID_1_)" enable-background="new    " width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="247.85" y1="167.65" x2="267.35" y2="167.65" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="162.2" y="469.8" opacity="0.95" fill="url(#SVGID_2_)" enable-background="new    " width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="247.85" y1="174.35" x2="267.35" y2="174.35" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="168.9" y="469.8" opacity="0.95" fill="url(#SVGID_3_)" enable-background="new    " width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="247.85" y1="180.95" x2="267.35" y2="180.95" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="175.5" y="469.8" opacity="0.95" fill="url(#SVGID_4_)" enable-background="new    " width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="247.85" y1="187.65" x2="267.35" y2="187.65" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="182.2" y="469.8" opacity="0.95" fill="url(#SVGID_5_)" enable-background="new    " width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="247.85" y1="194.35" x2="267.35" y2="194.35" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="188.9" y="469.8" opacity="0.95" fill="url(#SVGID_6_)" enable-background="new    " width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="247.85" y1="200.95" x2="267.35" y2="200.95" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="195.5" y="469.8" fill="url(#SVGID_7_)" width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="247.85" y1="207.65" x2="267.35" y2="207.65" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="202.2" y="469.8" fill="url(#SVGID_8_)" width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_9_" gradientUnits="userSpaceOnUse" x1="247.85" y1="214.25" x2="267.35" y2="214.25" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="208.8" y="469.8" fill="url(#SVGID_9_)" width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_10_" gradientUnits="userSpaceOnUse" x1="247.85" y1="220.95" x2="267.35" y2="220.95" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="215.5" y="469.8" fill="url(#SVGID_10_)" width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_11_" gradientUnits="userSpaceOnUse" x1="247.85" y1="227.65" x2="267.35" y2="227.65" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="222.2" y="469.8" fill="url(#SVGID_11_)" width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_12_" gradientUnits="userSpaceOnUse" x1="247.85" y1="234.25" x2="267.35" y2="234.25" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="228.8" y="469.8" fill="url(#SVGID_12_)" width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_13_" gradientUnits="userSpaceOnUse" x1="247.85" y1="240.95" x2="267.35" y2="240.95" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="235.5" y="469.8" fill="url(#SVGID_13_)" width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_14_" gradientUnits="userSpaceOnUse" x1="247.85" y1="247.65" x2="267.35" y2="247.65" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="242.2" y="469.8" fill="url(#SVGID_14_)" width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_15_" gradientUnits="userSpaceOnUse" x1="247.85" y1="254.25" x2="267.35" y2="254.25" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="248.8" y="469.8" fill="url(#SVGID_15_)" width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_16_" gradientUnits="userSpaceOnUse" x1="247.85" y1="260.95" x2="267.35" y2="260.95" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="255.5" y="469.8" fill="url(#SVGID_16_)" width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_17_" gradientUnits="userSpaceOnUse" x1="247.85" y1="267.55" x2="267.35" y2="267.55" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="262.1" y="469.8" fill="url(#SVGID_17_)" width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_18_" gradientUnits="userSpaceOnUse" x1="247.85" y1="274.25" x2="267.35" y2="274.25" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="268.8" y="469.8" fill="url(#SVGID_18_)" width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_19_" gradientUnits="userSpaceOnUse" x1="247.85" y1="280.95" x2="267.35" y2="280.95" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="275.5" y="469.8" fill="url(#SVGID_19_)" width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_20_" gradientUnits="userSpaceOnUse" x1="247.85" y1="287.55" x2="267.35" y2="287.55" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="282.1" y="469.7" fill="url(#SVGID_20_)" width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_21_" gradientUnits="userSpaceOnUse" x1="247.85" y1="293.95" x2="267.35" y2="293.95" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="288.5" y="469.7" opacity="0.95" fill="url(#SVGID_21_)" enable-background="new    " width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_22_" gradientUnits="userSpaceOnUse" x1="247.85" y1="300.65" x2="267.35" y2="300.65" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="295.2" y="469.7" opacity="0.95" fill="url(#SVGID_22_)" enable-background="new    " width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_23_" gradientUnits="userSpaceOnUse" x1="247.85" y1="307.35" x2="267.35" y2="307.35" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="301.9" y="469.7" opacity="0.95" fill="url(#SVGID_23_)" enable-background="new    " width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_24_" gradientUnits="userSpaceOnUse" x1="247.85" y1="313.95" x2="267.35" y2="313.95" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="308.5" y="469.7" opacity="0.95" fill="url(#SVGID_24_)" enable-background="new    " width="2.7" height="19.5"/>
		
			<LinearGradient id="SVGID_25_" gradientUnits="userSpaceOnUse" x1="247.85" y1="320.65" x2="267.35" y2="320.65" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -4.1 221.9)">
			<Stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/>
			<Stop  offset="1" style="stop-color:#B7C6E6"/>
		</LinearGradient>
		<Rect x="315.2" y="469.7" opacity="0.95" fill="url(#SVGID_25_)" enable-background="new    " width="2.7" height="19.5"/>
	</G>
	<G>
		<Rect x="320.9" y="469.7" opacity="0.95" fill="#D2D2D1" enable-background="new    " width="2.7" height="19.5"/>
		<Rect x="327.5" y="469.7" fill="#D2D2D1" width="2.7" height="19.5"/>
		<Rect x="334.2" y="469.7" fill="#D2D2D1" width="2.7" height="19.5"/>
		<Rect x="340.8" y="469.7" fill="#D2D2D1" width="2.7" height="19.5"/>
		<Rect x="347.5" y="469.7" fill="#D2D2D1" width="2.7" height="19.5"/>
		<Rect x="354.2" y="469.7" fill="#D2D2D1" width="2.7" height="19.5"/>
		<Rect x="360.8" y="469.7" fill="#D2D2D1" width="2.7" height="19.5"/>
		<Rect x="367.5" y="469.7" fill="#D2D2D1" width="2.7" height="19.5"/>
		<Rect x="375.2" y="469.7" fill="#D2D2D1" width="2.7" height="19.5"/>
		<Rect x="381.8" y="469.7" fill="#D2D2D1" width="2.7" height="19.5"/>
		<Rect x="388.5" y="469.7" fill="#D2D2D1" width="2.7" height="19.5"/>
		<Rect x="395.1" y="469.7" fill="#D2D2D1" width="2.7" height="19.5"/>
		<Rect x="401.8" y="469.7" fill="#D2D2D1" width="2.7" height="19.5"/>
	</G>
</G>
  </AnimatedSvg>
      )}
         
       
  
  
     

        
      }






export default ProgressBar;

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    //justifyContent: 'center',
    //padding:20,
    
  },
  containerr:{
    flex: 1,
    height:'60%',

  },
  transform:{
    
      marginTop:'20%',
  },
  text:{transform: [
    { rotate: "-90deg" }, 
  
  ],
  //fontSize:15,fontWeight:'bold',marginBottom:3,
 // marginLeft:310,marginRight:-70
},

container: {
  backgroundColor: '#C49A6C',
  
},
});


