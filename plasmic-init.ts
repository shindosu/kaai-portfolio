import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { WorkSlider } from "@/components/home/WorkSlider";
import { InfiniteCarouselBackground } from '@/components/home/InfiniteCarouselBackground';
import { ImageSlider } from "@/components/work_details/ImageSlider";
import { Navbar } from "@/components/common/Navbar";
import { WorkCard } from "@/components/common/WorkCard";
import { ServiceBlock } from "@/components/services/ServiceBlock";
import { ServicePhotos } from "@/components/services/ServicePhotos";
import { ScrollDown } from '@/components/home/ScrollDown';


export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "cMv7LvHHC6kpLZxPuP6Vfa",
      token: "DgGuDhpNbe8MluKOdpwZOmdb9xyGs3OpP8MJdogcDJ33pW8QTe4jKIQeUgM8S7zEvgscCy72hZ1dWkWjhug",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

PLASMIC.registerComponent(WorkSlider, {
  name: "WorkSlider",
  props: {
    className: 'string',
    works: {
      type: 'array',
      itemType: {
      type:'object',
      fields: {
        title: 'string',
        date: 'string',
        slug: 'string',
        thumbnail: {
          type: 'object',
          fields: {
            url: 'string',
          },
        },
      }}
    },
    children: {
      type: 'slot',
      renderPropParams: ['work']
    },
    sectionTitle: {
      type: 'slot'
    },
    rightArrowButton: {
      type: 'slot'
    },
    leftArrowButton: {
      type: 'slot'
    },
  },
});

PLASMIC.registerComponent(InfiniteCarouselBackground, {
  name: 'InfiniteCarouselBackground',
  props: {
    className: 'string',
    children: {
      type: 'slot'
    },
    leftSideImages: {
      type: 'array',
      itemType: {
        type: 'object',
        fields: {
          imageUrl: 'string', // Changed to 'imageUrl' to match your structure
        }
      }
    },
    centerImages: {
      type: 'array',
      itemType: {
        type: 'object',
        fields: {
          imageUrl: 'string', // Changed to 'imageUrl'
        }
      }
    },
    rightSideImages: {
      type: 'array',
      itemType: {
        type: 'object',
        fields: {
          imageUrl: 'string', // Changed to "imageUrl"
        }
      },
    },
  },
});

PLASMIC.registerComponent(ImageSlider, {
  name: "ImageSlider",
  props: {
    work: {
      type: 'object',
      fields: {
        title: 'string',
      }
    },
    thumbnail: {
      type: 'object',
      fields: {
        url: 'string',
      }
    },
    images: {
      type: 'array',
      itemType: {
        type: 'object',
        fields: {
          url: 'string'
        }
    }
    },
    rightArrowButton: {
      type: 'slot'
    },
    leftArrowButton: {
      type: 'slot'
    },
    workTitleHeading: {
      type: 'slot',
      renderPropParams: ['work']
    },
    children: {
      type: 'slot',
      renderPropParams: ['work']
    },
    imageComponent: {
      type: 'slot',
      renderPropParams: ['image']
    },
    mobileRightArrowButton: {
      type: 'slot'
    },
    mobileLeftArrowButton: {
      type: 'slot'
    },
    dialogCloseButton: {
      type: 'slot',
    },
  },
});

PLASMIC.registerComponent(Navbar, {
  name: "CustomNavbar",
  props: {
    className: 'string',
    logoLink: {
      type: 'slot'
    },
    desktopNavLinks: {
      type: 'slot'
    },
    mobileNavLinks: {
      type: 'slot'
    },
    menuText: {
      type: 'slot'
    },
    closeText: {
      type: 'slot'
    }
  },
});

PLASMIC.registerComponent(WorkCard, {
  name: "WordCard",
  props: {
    imageSrc: 'string',
    details: {
      type: 'slot'
    }
  }
});

PLASMIC.registerComponent(ServiceBlock, {
  name: "ServiceBlock",
  props: {
    imageSrc: 'string',
    descriptionBlock: {
      type: 'slot'
    },
    order: 'number'
  },
});

PLASMIC.registerComponent(ServicePhotos, {
  name: 'ServicePhotos',
  props: {
    image1Url: {
      type: 'string',
    },
    image2Url: {
      type: 'string',
    },
  },
});


PLASMIC.registerComponent(ScrollDown, {
  name: 'ScrollDown',
  props: {
    children: {
      type: 'slot', // Make this a slot to accept dynamic content in Plasmic Studio
    },
  },
});
