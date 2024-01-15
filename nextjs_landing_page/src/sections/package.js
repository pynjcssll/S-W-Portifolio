/** @jsx jsx */
import { jsx, Container, Box, Flex } from 'theme-ui';
import { keyframes } from '@emotion/core';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import PriceCard from 'components/price-card';
import ButtonGroup from 'components/button-group';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';

const packages = {
  monthly: [
    {
      id: 0,
      name: 'Silver',
      description: 'Landing Page With 3-4 section max.',
      buttonText: (
        <a href="https://calendly.com/sitesanddwonders/basic" target="_blank" rel="noopener noreferrer">
          Book Now
        </a>
      ),
     
      priceWithUnit: '$1,499.99',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: '3 - 4 section static landing page ',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Responsive Design",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Basic SEO Setup',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Contact Form ',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: '1 Round of Revision ',
          isAvailable: true,
        },
      ],
    },
    {
      id: 1,
      name: 'Gold',
      description: 'Business Website',
      buttonText:  (
        <a href="https://calendly.com/sitesanddwonders/30min" target="_blank" rel="noopener noreferrer">
          Book Now
        </a>
      ),
      priceWithUnit: '$2,999',
      anotherOption: 'Get 20% off for referral',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Up to 5 Page Website',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Responsive Design",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "On-Page SEO Optimization",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'API Integration',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: '3 Revisions ',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: 'Diamond',
      description: 'Custom functionality and integrations',
      priceWithUnit: '$4,999',
      buttonText:  (
        <a href="https://calendly.com/sitesanddwonders/premium" target="_blank" rel="noopener noreferrer">
          Book Now
        </a>
      ),
      anotherOption: 'Get 20% off for referral',
      points: [
    
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "6-10 Custom Designs",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Cart & Payment Gateway Integration',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Complete SEO Setup ',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Workflow Automation ',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: '6 Revisions ',
          isAvailable: true,
        },

      ],
    },
    // {
    //   id: 3,
    //   header: 'Suggested',
    //   headerIcon: <IoIosCheckmarkCircle />,
    //   name: 'Pro Master',
    //   description: 'For pro level developers',
    //   priceWithUnit: '$24',
    //   buttonText: 'Create account',
    //   anotherOption: 'Or Start 14 Days trail',
    //   points: [
    //     {
    //       id: 1,
    //       icon: <IoIosCheckmarkCircle />,
    //       text: 'Drag & Drop Builder',
    //       isAvailable: true,
    //     },
    //     {
    //       id: 2,
    //       icon: <IoIosCheckmarkCircle />,
    //       text: "1,000's of Templates",
    //       isAvailable: true,
    //     },
    //     {
    //       id: 3,
    //       icon: <IoIosCheckmarkCircle />,
    //       text: 'Blog Support Tools',
    //       isAvailable: true,
    //     },
    //     {
    //       id: 4,
    //       icon: <IoIosCheckmarkCircle />,
    //       text: 'eCommerce Store ',
    //       isAvailable: true,
    //     },
    //   ],
    // },
  ],
  annual: [
    {
      id: 1,
      name: 'StartUp | Basic',
      description: 'For Small teams or office',
      buttonText:  (
        <a href="https://calendly.com/sitesanddwonders/maintenance" target="_blank" rel="noopener noreferrer">
          Start Now
        </a>
      ),
      priceWithUnit: '$99 / month',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Website Maintenance",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Support Hours 2',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Common Mainenance Requests',
          isAvailable: true,
        },
        {
          id: 4,
         // icon: <IoIosCloseCircle />,
         icon: <IoIosCheckmarkCircle />,
          text: '72 Hour Service Level Agreement ',
          isAvailable: true,
        },
        {
          id: 4,
         // icon: <IoIosCloseCircle />,
         icon: <IoIosCheckmarkCircle />,
          text: 'Monthly Backups',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: 'Advanced',
      description: 'For Enterprise business',
      priceWithUnit: '$499 / month',
      buttonText:   (
        <a href="https://calendly.com/sitesanddwonders/maintenance" target="_blank" rel="noopener noreferrer">
          Start Now
        </a>
      ),
     // anotherOption: 'Or Start 10 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Website Maintenance",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Support Hours 3',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Advanced Mainenance Requests',
          isAvailable: true,
        },
        {
          id: 4,
         // icon: <IoIosCloseCircle />,
         icon: <IoIosCheckmarkCircle />,
         text: '48 Hour Service Level Agreement ',
          isAvailable: true,
        },
        {
          id: 4,
         // icon: <IoIosCloseCircle />,
         icon: <IoIosCheckmarkCircle />,
          text: 'Monthly Backups',
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
    //  header: 'Suggested',
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'SMM | Web Maintenance',
      description: 'For pro level developers',
      priceWithUnit: '$999 / month',
      buttonText:   (
        <a href="https://calendly.com/sitesanddwonders/maintenance" target="_blank" rel="noopener noreferrer">
          Start Now
        </a>
      ),
      //anotherOption: 'Initial $99 Deposit',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Initial Set Up of Profile.",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Planning & Publishing Content.',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Schedule posts on a content calendar and recommend optimal post times',
          isAvailable: true,
        },
        {
          id: 4,
         // icon: <IoIosCloseCircle />,
         icon: <IoIosCheckmarkCircle />,
          text: 'Analyze trends and popular topics.',
          isAvailable: true,
        },
        {
          id: 5,
         // icon: <IoIosCloseCircle />,
         icon: <IoIosCheckmarkCircle />,
         text: '24 Hour Service Level Agreement ',
          isAvailable: true,
        },
      ],
    },
  ],
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Package() {
  const { monthly, annual } = packages;
  const [state, setState] = useState({
    active: 'monthly', 
    pricingPlan: monthly, 
  })

  const handlePricingPlan=(plan) => {
    if(plan=='annual') {
    setState({active:'annual', pricingPlan: annual })
   }else {
    setState({active:'monthly', pricingPlan: monthly })
   }
  }

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };

  return (
    <section id="pricing" sx={{ variant: 'section.pricing'}}>
      <Container>
        <SectionHeader
          slogan="Pricing Plan"
          title="Choose your Pricing Plan"
        />

        <Flex sx={styles.buttonGroup}>
          <Box sx={styles.buttonGroupInner}>
            <button
              className={state.active == 'monthly' ? 'active' : ''}
              type="button"
              aria-label="Monthly"
              onClick={() => handlePricingPlan('monthly')}
              >
                Website & Branding Package
              </button>
              <button
              className={state.active == 'annual' ? 'active' : ''}
              type="button"
              aria-label="Annual"
              onClick={() => handlePricingPlan('annual')}
              >
               Maintenance Package
              </button>
          </Box>
        </Flex>
        <Box sx={styles.pricingWrapper} className="pricing__wrapper">
          <Carousel {...sliderParams}>
            {state.pricingPlan.map((packageData)=>(
              <Box sx={styles.pricingItem} key={packageData.id} >
                <PriceCard data={packageData} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>

    </section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex',
      },
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto',
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2,
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 27px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
};
