import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      {/*<FooterSubscription>
        <FooterSubHeading>
          Join our newsletter to get the latest trends and stay updated on what we're working on. 
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>*/}
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLink to='/company'>About Us</FooterLink>
            <FooterLink to='/contact'>Contact Us</FooterLink>
            <FooterLink to='/login'>Login</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLink to='/support'>Support</FooterLink>
            <FooterLink to='/terms'>Terms of Service</FooterLink>
            <FooterLink to='/privacy'>Privacy Policy</FooterLink>
          </FooterLinkItems>
          {/*<FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/'>Contact</FooterLink>
            <FooterLink to='/'>Support</FooterLink>
            <FooterLink to='/'>Partnerships</FooterLink>
            <FooterLink to='/'>Sponsorships</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Legal</FooterLinkTitle>
            <FooterLink to='/'>Terms of Service</FooterLink>
            <FooterLink to='/'>Privacy Policy</FooterLink>
          </FooterLinkItems>*/}
        </FooterLinksWrapper> 
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            Tronocol
          </SocialLogo>
          <WebsiteRights>Tronocol © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='YouTube' >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='https://www.linkedin.com/company/tronocol' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;