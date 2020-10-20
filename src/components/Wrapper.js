import styled from 'styled-components'
import { device } from '../utils/devices'

export const Wrapper = styled.div`
    padding-top: ${props => props.pt || '0'}px;
    padding-bottom: ${props => props.pb || '0'}px;
    padding-left: ${props => props.pl || '0'}px;
    padding-right: ${props => props.pr || '0'}px;
    height: ${props => props.height || ''}px;
    background: ${props => props.background || ''};
    display: ${props => props.display || 'block'};
    justify-content: ${props => props.jc || 'normal'};
    align-items: ${props => props.ai || 'normal'};
    flex-wrap: ${props => props.fw || 'normal'};
    flex-direction: ${props => props.fd || 'normal'};
    width: ${props => props.width || ''}px;
    flex: ${props => props.flex ? '1 1 185px' : ''};
    grid-template-columns: repeat(auto-fill,minmax(160px, 1fr));
    
    
    
    @media ${device.tablet} {
      grid-template-columns: repeat(auto-fill,minmax(270px,1fr));
    }
    @media ${device.mobileXS} {
      padding-left: 0px;
      padding-right: 0px;
      padding-bottom: ${props => props.pb || '10'}px;
      
    }
    @media ${device.mobileS} {
      padding-left: 0px;
      padding-right: 0px;
      padding-bottom: ${props => props.pb || '10'}px;
      
    }
    @media ${device.mobileM} {
      grid-template-columns: repeat(auto-fill,minmax(160px, 1fr));
      padding-left: ${props => props.pl || '0'}px;
      padding-right: ${props => props.pr || '0'}px;
    }
    @media ${device.mobileL} {
      grid-template-columns: repeat(auto-fill,minmax(160px, 1fr));
      padding-left: ${props => props.pl || '0'}px;
      padding-right: ${props => props.pr || '0'}px;
    }
    @media ${device.tablet} {
      grid-template-columns: repeat(auto-fill,minmax(270px,1fr));
    }
    
    @media ${device.tabletS} {
      grid-template-columns: repeat(auto-fill,minmax(254px,1fr));
    }
    @media ${device.laptop} {
      grid-template-columns: repeat(auto-fill,minmax(360px,1fr));
      padding-left: ${props => props.pl || '0'}px;
      padding-right: ${props => props.pr || '0'}px;
    }
`