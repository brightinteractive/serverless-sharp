export const schema = {
  version: '11.2.0',
  parameters: {
    ar: {
      display_name: 'aspect ratio',
      category: 'size',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'ratio',
          strict_range: {
            min: 0
          }
        }
      ],
      depends: [
        'fit=crop'
      ],
      short_description: 'Specifies an aspect ratio to maintain when resizing and cropping the image'
    },
    auto: {
      display_name: 'automatic',
      category: 'auto',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'list',
          possible_values: [
            'enhance',
            'format',
            'redeye',
            'compress',
            'true'
          ]
        }
      ],
      disallow_base64: true,
      url: 'https://docs.imgix.com/apis/url/auto',
      short_description: 'Applies automatic enhancements to images.'
    },
    bg: {
      display_name: 'background color',
      category: 'fill',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'hex_color'
        },
        {
          type: 'color_keyword'
        }
      ],
      default: '#fff',
      url: 'https://docs.imgix.com/apis/url/bg',
      short_description: 'Colors the background of padded and partially-transparent images.'
    },
    'blend-align': {
      display_name: 'blend align',
      category: 'blending',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'list',
          possible_values: [
            'top',
            'bottom',
            'middle',
            'left',
            'right',
            'center'
          ]
        }
      ],
      aliases: [
        'blendalign',
        'ba'
      ],
      depends: [
        'blend'
      ],
      url: 'https://docs.imgix.com/apis/url/blending/blend-align',
      short_description: 'Changes the blend alignment relative to the parent image.'
    },
    'blend-alpha': {
      display_name: 'blend alpha',
      category: 'blending',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          strict_range: {
            min: 0,
            max: 100
          }
        }
      ],
      aliases: [
        'blendalpha',
        'balph'
      ],
      default: 100,
      depends: [
        'blend'
      ],
      url: 'https://docs.imgix.com/apis/url/blending/blend-alpha',
      short_description: 'Changes the alpha of the blend image.'
    },
    'blend-crop': {
      display_name: 'blend crop',
      category: 'blending',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'list',
          possible_values: [
            'top',
            'bottom',
            'left',
            'right',
            'faces'
          ]
        }
      ],
      aliases: [
        'blendcrop',
        'bc'
      ],
      depends: [
        'blend'
      ],
      url: 'https://docs.imgix.com/apis/url/blending/blend-crop',
      short_description: 'Specifies the type of crop for blend images.'
    },
    'blend-fit': {
      display_name: 'blend fit',
      category: 'blending',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'string',
          possible_values: [
            'clamp',
            'clip',
            'crop',
            'scale',
            'max'
          ]
        }
      ],
      aliases: [
        'blendfit',
        'bf'
      ],
      default: 'clip',
      depends: [
        'blend'
      ],
      url: 'https://docs.imgix.com/apis/url/blending/blend-fit',
      short_description: 'Specifies the fit mode for blend images.'
    },
    'blend-h': {
      display_name: 'blend height',
      category: 'blending',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          strict_range: {
            min: 2,
            max: 10000
          }
        },
        {
          type: 'unit_scalar',
          strict_range: {
            min: 0,
            max: 1
          }
        }
      ],
      aliases: [
        'blendh',
        'bh'
      ],
      depends: [
        'blend'
      ],
      url: 'https://docs.imgix.com/apis/url/blending/blend-h',
      short_description: 'Adjusts the height of the blend image.'
    },
    'blend-mode': {
      display_name: 'blend mode',
      category: 'blending',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'string',
          possible_values: [
            'color',
            'burn',
            'dodge',
            'darken',
            'difference',
            'exclusion',
            'hardlight',
            'hue',
            'lighten',
            'luminosity',
            'multiply',
            'overlay',
            'saturation',
            'screen',
            'softlight',
            'normal'
          ]
        }
      ],
      aliases: [
        'blendmode',
        'bm'
      ],
      default: 'overlay',
      depends: [
        'blend'
      ],
      url: 'https://docs.imgix.com/apis/url/blending/blend-mode',
      short_description: 'Sets the blend mode for a blend image.'
    },
    'blend-pad': {
      display_name: 'blend padding',
      category: 'blending',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 0
          }
        }
      ],
      aliases: [
        'blendpad',
        'bp'
      ],
      default: 0,
      depends: [
        'blend'
      ],
      url: 'https://docs.imgix.com/apis/url/blending/blend-pad',
      short_description: 'Applies padding to the blend image.'
    },
    'blend-size': {
      display_name: 'blend size',
      category: 'blending',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'string',
          possible_values: [
            'inherit'
          ]
        }
      ],
      aliases: [
        'blendsize',
        'bs'
      ],
      depends: [
        'blend'
      ],
      url: 'https://docs.imgix.com/apis/url/blending/blend-size',
      short_description: 'Adjusts the size of the blend image.'
    },
    'blend-w': {
      display_name: 'blend width',
      category: 'blending',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          strict_range: {
            min: 2,
            max: 10000
          }
        },
        {
          type: 'unit_scalar',
          strict_range: {
            min: 0,
            max: 1
          }
        }
      ],
      aliases: [
        'blendw',
        'bw'
      ],
      depends: [
        'blend'
      ],
      url: 'https://docs.imgix.com/apis/url/blending/blend-w',
      short_description: 'Adjusts the width of the blend image.'
    },
    'blend-x': {
      display_name: 'blend x position',
      category: 'blending',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 0
          }
        }
      ],
      aliases: [
        'blendx',
        'bx'
      ],
      default: 0,
      depends: [
        'blend'
      ],
      url: 'https://docs.imgix.com/apis/url/blending/blend-x',
      short_description: 'Adjusts the x-offset of the blend image relative to its parent.'
    },
    'blend-y': {
      display_name: 'blend y position',
      category: 'blending',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 0
          }
        }
      ],
      aliases: [
        'blendy',
        'by'
      ],
      default: 0,
      depends: [
        'blend'
      ],
      url: 'https://docs.imgix.com/apis/url/blending/blend-y',
      short_description: 'Adjusts the y-offset of the blend image relative to its parent.'
    },
    blend: {
      display_name: 'blend',
      category: 'blending',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'color_keyword'
        },
        {
          type: 'url'
        },
        {
          type: 'path'
        }
      ],
      aliases: [
        'b'
      ],
      url: 'https://docs.imgix.com/apis/url/blending/blend',
      short_description: 'Specifies the location of the blend image.'
    },
    blur: {
      display_name: 'gaussian blur',
      category: 'stylize',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 0,
            max: 2000
          }
        }
      ],
      default: 0,
      url: 'https://docs.imgix.com/apis/url/stylize/blur',
      short_description: 'Applies a gaussian blur to an image.'
    },
    'border-radius-inner': {
      display_name: 'inner border radius',
      category: 'border-and-padding',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          strict_range: {
            min: 0
          }
        },
        {
          0: [
            {
              type: 'integer',
              strict_range: {
                min: 0
              }
            }
          ],
          1: [
            {
              type: 'integer',
              strict_range: {
                min: 0
              }
            }
          ],
          2: [
            {
              type: 'integer',
              strict_range: {
                min: 0
              }
            }
          ],
          3: [
            {
              type: 'integer',
              strict_range: {
                min: 0
              }
            }
          ],
          type: 'list',
          length: 4
        }
      ],
      depends: [
        'border'
      ],
      url: 'https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner',
      short_description: "Sets the inner radius of the image's border in pixels."
    },
    'border-radius': {
      display_name: 'outer border radius',
      category: 'border-and-padding',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          strict_range: {
            min: 0
          }
        },
        {
          0: [
            {
              type: 'integer',
              strict_range: {
                min: 0
              }
            }
          ],
          1: [
            {
              type: 'integer',
              strict_range: {
                min: 0
              }
            }
          ],
          2: [
            {
              type: 'integer',
              strict_range: {
                min: 0
              }
            }
          ],
          3: [
            {
              type: 'integer',
              strict_range: {
                min: 0
              }
            }
          ],
          type: 'list',
          length: 4
        }
      ],
      depends: [
        'border'
      ],
      url: 'https://docs.imgix.com/apis/url/border-and-padding/border-radius',
      short_description: "Sets the outer radius of the image's border in pixels."
    },
    border: {
      display_name: 'border size & color',
      category: 'border-and-padding',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          0: [
            {
              type: 'integer',
              suggested_range: {
                min: 1,
                max: 100
              }
            }
          ],
          1: [
            {
              type: 'hex_color'
            },
            {
              type: 'color_keyword'
            }
          ],
          type: 'list',
          length: 2
        }
      ],
      url: 'https://docs.imgix.com/apis/url/border-and-padding/border',
      short_description: 'Applies a border to an image.'
    },
    bri: {
      display_name: 'brightness',
      category: 'adjustment',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: -100,
            max: 100
          }
        }
      ],
      default: 0,
      url: 'https://docs.imgix.com/apis/url/adjustment/bri',
      short_description: 'Adjusts the brightness of the source image.'
    },
    ch: {
      display_name: 'client hints',
      category: 'format',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'list',
          possible_values: [
            'width',
            'dpr',
            'save-data'
          ]
        }
      ],
      disallow_base64: true,
      url: 'https://docs.imgix.com/apis/url/format/ch',
      short_description: 'Sets one or more Client-Hints headers'
    },
    chromasub: {
      display_name: 'chroma subsampling',
      category: 'format',
      available_in: [
        'url',
        'graph',
        'output'
      ],
      expects: [
        {
          type: 'integer',
          possible_values: [
            444,
            422,
            420
          ]
        }
      ],
      default: 420,
      url: 'https://docs.imgix.com/apis/url/format/chromasub',
      short_description: 'Specifies the output chroma subsampling rate.'
    },
    colorquant: {
      display_name: 'color quantization',
      category: 'format',
      available_in: [
        'url',
        'graph',
        'output'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 2,
            max: 256
          }
        }
      ],
      url: 'https://docs.imgix.com/apis/url/format/colorquant',
      short_description: 'Limits the number of unique colors in an image.'
    },
    colors: {
      display_name: 'palette color count',
      category: 'color-palette',
      available_in: [
        'url',
        'output'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 0,
            max: 16
          }
        }
      ],
      default: 6,
      depends: [
        'palette'
      ],
      url: 'https://docs.imgix.com/apis/url/color-palette/colors',
      short_description: 'Specifies how many colors to include in a palette-extraction response.'
    },
    con: {
      display_name: 'contrast',
      category: 'adjustment',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: -100,
            max: 100
          }
        }
      ],
      default: 0,
      url: 'https://docs.imgix.com/apis/url/adjustment/con',
      short_description: 'Adjusts the contrast of the source image.'
    },
    'corner-radius': {
      display_name: 'mask corner radius',
      category: 'mask',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          strict_range: {
            min: 0
          }
        },
        {
          0: [
            {
              type: 'integer',
              strict_range: {
                min: 0
              }
            }
          ],
          1: [
            {
              type: 'integer',
              strict_range: {
                min: 0
              }
            }
          ],
          2: [
            {
              type: 'integer',
              strict_range: {
                min: 0
              }
            }
          ],
          3: [
            {
              type: 'integer',
              strict_range: {
                min: 0
              }
            }
          ],
          type: 'list',
          length: 4
        }
      ],
      depends: [
        'mask=corners'
      ],
      url: 'https://docs.imgix.com/apis/url/mask/corner-radius',
      short_description: 'Specifies the radius value for a rounded corner mask.'
    },
    crop: {
      display_name: 'crop mode',
      category: 'size',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'list',
          possible_values: [
            'top',
            'bottom',
            'left',
            'right',
            'faces',
            'entropy',
            'edges',
            'focalpoint'
          ]
        }
      ],
      depends: [
        'fit=crop'
      ],
      url: 'https://docs.imgix.com/apis/url/size/crop',
      short_description: 'Specifies how to crop an image.'
    },
    cs: {
      display_name: 'color space',
      category: 'format',
      available_in: [
        'url',
        'graph',
        'output'
      ],
      expects: [
        {
          type: 'string',
          possible_values: [
            'srgb',
            'adobergb1998',
            'tinysrgb',
            'strip'
          ]
        }
      ],
      url: 'https://docs.imgix.com/apis/url/format/cs',
      short_description: 'Specifies the color space of the output image.'
    },
    dl: {
      display_name: 'download',
      category: 'format',
      available_in: [
        'url',
        'output'
      ],
      expects: [
        {
          type: 'string'
        }
      ],
      url: 'https://docs.imgix.com/apis/url/format/dl',
      short_description: 'Forces a URL to use send-file in its response.'
    },
    dpi: {
      display_name: 'dots per inch',
      category: 'format',
      available_in: [
        'url',
        'graph',
        'output'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 0
          }
        }
      ],
      url: 'https://docs.imgix.com/apis/url/format/dpi',
      short_description: 'Sets the DPI value in the EXIF header.'
    },
    dpr: {
      display_name: 'device pixel ratio',
      category: 'pixel-density',
      available_in: [
        'url',
        'graph',
        'output'
      ],
      expects: [
        {
          type: 'number',
          suggested_range: {
            min: 0.75,
            max: 5
          },
          strict_range: {
            min: 0,
            max: 5
          }
        }
      ],
      default: 1,
      url: 'https://docs.imgix.com/apis/url/dpr',
      short_description: 'Adjusts the device-pixel ratio of the output image.'
    },
    'duotone-alpha': {
      display_name: 'duotone alpha',
      category: 'stylize',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          strict_range: {
            min: 0,
            max: 100
          }
        }
      ],
      default: 100,
      depends: [
        'duotone'
      ],
      url: 'https://docs.imgix.com/apis/url/stylize/duotone-alpha',
      short_description: 'Changes the alpha of the duotone effect atop the source image.'
    },
    duotone: {
      display_name: 'duotone',
      category: 'stylize',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          0: [
            {
              type: 'hex_color'
            },
            {
              type: 'color_keyword'
            }
          ],
          1: [
            {
              type: 'hex_color'
            },
            {
              type: 'color_keyword'
            }
          ],
          type: 'list',
          length: 2
        }
      ],
      url: 'https://docs.imgix.com/apis/url/stylize/duotone',
      short_description: 'Applies a duotone effect to the source image.'
    },
    exp: {
      display_name: 'exposure',
      category: 'adjustment',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: -100,
            max: 100
          }
        }
      ],
      default: 0,
      url: 'https://docs.imgix.com/apis/url/adjustment/exp',
      short_description: 'Adjusts the exposure of the output image.'
    },
    expires: {
      display_name: 'URL expiration timestamp',
      category: 'expiration',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'timestamp'
        }
      ],
      url: 'https://docs.imgix.com/apis/url/expires',
      short_description: 'A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.'
    },
    faceindex: {
      display_name: 'face index',
      category: 'face-detection',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 1
          }
        }
      ],
      depends: [
        'fit=facearea'
      ],
      url: 'https://docs.imgix.com/apis/url/face-detection/faceindex',
      short_description: 'Selects a face to crop to.'
    },
    facepad: {
      display_name: 'face padding',
      category: 'face-detection',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'number',
          suggested_range: {
            min: 1,
            max: 10
          }
        }
      ],
      default: 1,
      depends: [
        'fit=facearea'
      ],
      url: 'https://docs.imgix.com/apis/url/face-detection/facepad',
      short_description: 'Adjusts padding around a selected face.'
    },
    faces: {
      display_name: 'json face data',
      category: 'face-detection',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          possible_values: [
            1
          ]
        }
      ],
      depends: [
        'fm=json'
      ],
      url: 'https://docs.imgix.com/apis/url/face-detection/faces',
      short_description: 'Specifies that face data should be included in output when combined with `fm=json`.'
    },
    'fill-color': {
      display_name: 'fill color',
      category: 'fill',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'hex_color'
        },
        {
          type: 'color_keyword'
        }
      ],
      aliases: [
        'fillcolor'
      ],
      default: '#fff',
      depends: [
        'fill=solid'
      ],
      url: 'https://docs.imgix.com/apis/url/fill/fill-color',
      short_description: 'Sets the fill color for images with additional space created by the fit setting'
    },
    fill: {
      display_name: 'fill mode',
      category: 'fill',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'string',
          possible_values: [
            'solid',
            'blur'
          ]
        }
      ],
      depends: [
        'fit'
      ],
      url: 'https://docs.imgix.com/apis/url/fill/fill',
      short_description: 'Determines how to fill in additional space created by the fit setting'
    },
    fit: {
      display_name: 'resize fit mode',
      category: 'size',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'string',
          possible_values: [
            'clamp',
            'clip',
            'crop',
            'facearea',
            'fill',
            'fillmax',
            'max',
            'min',
            'scale'
          ]
        }
      ],
      default: 'clip',
      aliases: [
        'f'
      ],
      url: 'https://docs.imgix.com/apis/url/size/fit',
      short_description: 'Specifies how to map the source image to the output image dimensions.'
    },
    flip: {
      display_name: 'flip axis',
      category: 'rotation',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'string',
          possible_values: [
            'h',
            'v',
            'hv'
          ]
        }
      ],
      url: 'https://docs.imgix.com/apis/url/rotation/flip',
      short_description: 'Flips an image on a specified axis.'
    },
    fm: {
      display_name: 'output format',
      category: 'format',
      available_in: [
        'url',
        'graph',
        'output'
      ],
      expects: [
        {
          type: 'string',
          possible_values: [
            'gif',
            'jpg',
            'jp2',
            'json',
            'jxr',
            'pjpg',
            'mp4',
            'png',
            'png8',
            'png32',
            'webp',
            'webm'
          ]
        }
      ],
      url: 'https://docs.imgix.com/apis/url/format/fm',
      short_description: 'Changes the format of the output image.'
    },
    'fp-debug': {
      display_name: 'focal point debug',
      category: 'focalpoint-crop',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'boolean'
        }
      ],
      default: false,
      depends: [
        'fit=crop',
        'crop=focalpoint'
      ],
      url: 'https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug',
      short_description: 'Displays crosshairs identifying the location of the set focal point'
    },
    'fp-x': {
      display_name: 'focal point x position',
      category: 'focalpoint-crop',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'unit_scalar',
          default: 0.5,
          strict_range: {
            min: 0,
            max: 1
          }
        }
      ],
      depends: [
        'fit=crop',
        'crop=focalpoint'
      ],
      url: 'https://docs.imgix.com/apis/url/focalpoint-crop/fp-x',
      short_description: 'Sets the relative horizontal value for the focal point of an image'
    },
    'fp-y': {
      display_name: 'focal point y position',
      category: 'focalpoint-crop',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'unit_scalar',
          default: 0.5,
          strict_range: {
            min: 0,
            max: 1
          }
        }
      ],
      depends: [
        'fit=crop',
        'crop=focalpoint'
      ],
      url: 'https://docs.imgix.com/apis/url/focalpoint-crop/fp-y',
      short_description: 'Sets the relative vertical value for the focal point of an image'
    },
    'fp-z': {
      display_name: 'focal point zoom',
      category: 'focalpoint-crop',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          default: 1,
          suggested_range: {
            min: 1,
            max: 10
          },
          strict_range: {
            min: 1,
            max: 100
          }
        }
      ],
      depends: [
        'fit=crop',
        'crop=focalpoint'
      ],
      url: 'https://docs.imgix.com/apis/url/focalpoint-crop/fp-z',
      short_description: 'Sets the relative zoom value for the focal point of an image'
    },
    gam: {
      display_name: 'gamma',
      category: 'adjustment',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: -100,
            max: 100
          }
        }
      ],
      default: 0,
      url: 'https://docs.imgix.com/apis/url/adjustment/gam',
      short_description: 'Adjusts the gamma of the source image.'
    },
    h: {
      display_name: 'image height',
      category: 'size',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          strict_range: {
            min: 2,
            max: 10000
          }
        },
        {
          type: 'unit_scalar',
          strict_range: {
            min: 0,
            max: 1
          }
        }
      ],
      url: 'https://docs.imgix.com/apis/url/size/h',
      short_description: 'Adjusts the height of the output image.'
    },
    high: {
      display_name: 'highlight',
      category: 'adjustment',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: -100,
            max: 0
          }
        }
      ],
      default: 0,
      url: 'https://docs.imgix.com/apis/url/adjustment/high',
      short_description: 'Adjusts the highlights of the source image.'
    },
    htn: {
      display_name: 'halftone',
      category: 'stylize',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 0,
            max: 100
          }
        }
      ],
      default: 0,
      url: 'https://docs.imgix.com/apis/url/stylize/htn',
      short_description: 'Applies a half-tone effect to the source image.'
    },
    hue: {
      display_name: 'hue shift',
      category: 'adjustment',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 0,
            max: 360
          }
        }
      ],
      default: 0,
      url: 'https://docs.imgix.com/apis/url/adjustment/hue',
      short_description: 'Adjusts the hue of the source image.'
    },
    invert: {
      display_name: 'invert',
      category: 'adjustment',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'boolean'
        }
      ],
      aliases: [
        'inv'
      ],
      default: false,
      url: 'https://docs.imgix.com/apis/url/adjustment/invert',
      short_description: 'Inverts the colors on the source image.'
    },
    lossless: {
      display_name: 'lossless compression',
      category: 'format',
      available_in: [
        'url',
        'graph',
        'output'
      ],
      expects: [
        {
          type: 'boolean'
        }
      ],
      default: false,
      depends: [
        'fm=webp',
        'fm=jxr'
      ],
      url: 'https://docs.imgix.com/apis/url/format/lossless',
      short_description: 'Specifies that the output image should be a lossless variant.'
    },
    'mark-align': {
      display_name: 'watermark alignment mode',
      category: 'watermark',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'list',
          possible_values: [
            'top',
            'middle',
            'bottom',
            'left',
            'center',
            'right'
          ]
        }
      ],
      aliases: [
        'ma',
        'markalign'
      ],
      depends: [
        'mark'
      ],
      url: 'https://docs.imgix.com/apis/url/watermark/mark-align',
      short_description: 'Changes the watermark alignment relative to the parent image.'
    },
    'mark-alpha': {
      display_name: 'watermark alpha',
      category: 'watermark',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 1,
            max: 100
          }
        }
      ],
      default: 100,
      aliases: [
        'markalpha',
        'malph'
      ],
      depends: [
        'mark'
      ],
      url: 'https://docs.imgix.com/apis/url/watermark/mark-alpha',
      short_description: 'Changes the alpha of the watermark image.'
    },
    'mark-base': {
      display_name: 'watermark base url',
      category: 'watermark',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'url'
        },
        {
          type: 'path'
        }
      ],
      aliases: [
        'mb',
        'markbase'
      ],
      depends: [
        'mark'
      ],
      url: 'https://docs.imgix.com/apis/url/watermark/mark-base',
      short_description: 'Changes base URL of the watermark image.'
    },
    'mark-fit': {
      display_name: 'watermark fit mode',
      category: 'watermark',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'string',
          possible_values: [
            'clip',
            'crop',
            'fill',
            'max',
            'scale'
          ]
        }
      ],
      default: 'clip',
      aliases: [
        'mf',
        'markfit'
      ],
      depends: [
        'mark',
        'markw',
        'markh'
      ],
      url: 'https://docs.imgix.com/apis/url/watermark/mark-fit',
      short_description: 'Specifies the fit mode for watermark images.'
    },
    'mark-h': {
      display_name: 'watermark height',
      category: 'watermark',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          strict_range: {
            min: 2,
            max: 10000
          }
        },
        {
          type: 'unit_scalar',
          strict_range: {
            min: 0,
            max: 1
          }
        }
      ],
      aliases: [
        'mh',
        'markh'
      ],
      depends: [
        'mark'
      ],
      url: 'https://docs.imgix.com/apis/url/watermark/mark-h',
      short_description: 'Adjusts the height of the watermark image.'
    },
    'mark-pad': {
      display_name: 'watermark padding',
      category: 'watermark',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 0
          }
        }
      ],
      default: 10,
      aliases: [
        'mp',
        'markpad'
      ],
      depends: [
        'mark'
      ],
      url: 'https://docs.imgix.com/apis/url/watermark/mark-pad',
      short_description: 'Applies padding to the watermark image.'
    },
    'mark-scale': {
      display_name: 'watermark scale',
      category: 'watermark',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 0,
            max: 100
          }
        }
      ],
      aliases: [
        'ms',
        'markscale'
      ],
      depends: [
        'mark'
      ],
      url: 'https://docs.imgix.com/apis/url/watermark/mark-scale',
      short_description: 'Adjusts the scale of the watermark image.'
    },
    'mark-w': {
      display_name: 'watermark width',
      category: 'watermark',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          strict_range: {
            min: 2,
            max: 10000
          }
        },
        {
          type: 'unit_scalar',
          strict_range: {
            min: 0,
            max: 1
          }
        }
      ],
      aliases: [
        'mw',
        'markw'
      ],
      depends: [
        'mark'
      ],
      url: 'https://docs.imgix.com/apis/url/watermark/mark-w',
      short_description: 'Adjusts the width of the watermark image.'
    },
    'mark-x': {
      display_name: 'watermark x position',
      category: 'watermark',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 0
          }
        }
      ],
      aliases: [
        'mx',
        'markx'
      ],
      depends: [
        'mark'
      ],
      url: 'https://docs.imgix.com/apis/url/watermark/mark-x',
      short_description: 'Adjusts the x-offset of the watermark image relative to its parent.'
    },
    'mark-y': {
      display_name: 'watermark y position',
      category: 'watermark',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          strict_range: {
            min: 0
          }
        }
      ],
      aliases: [
        'my',
        'marky'
      ],
      depends: [
        'mark'
      ],
      url: 'https://docs.imgix.com/apis/url/watermark/mark-y',
      short_description: 'Adjusts the y-offset of the watermark image relative to its parent.'
    },
    mark: {
      display_name: 'watermark image url',
      category: 'watermark',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'url'
        },
        {
          type: 'path'
        }
      ],
      aliases: [
        'm'
      ],
      url: 'https://docs.imgix.com/apis/url/watermark/mark',
      short_description: 'Specifies the location of the watermark image.'
    },
    mask: {
      display_name: 'mask type',
      category: 'mask',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'string',
          possible_values: [
            'ellipse',
            'corners'
          ]
        },
        {
          type: 'url'
        },
        {
          type: 'path'
        }
      ],
      url: 'https://docs.imgix.com/apis/url/mask',
      short_description: 'Defines the type of mask and specifies the URL if that type is selected.'
    },
    maskbg: {
      display_name: 'mask background color',
      category: 'mask',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'hex_color'
        },
        {
          type: 'color_keyword'
        }
      ],
      default: '#fff',
      depends: [
        'mask'
      ],
      url: 'https://docs.imgix.com/apis/url/mask/mask-bg',
      short_description: 'Colors the background of the transparent mask area of images'
    },
    'max-h': {
      display_name: 'maximum height',
      category: 'size',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          strict_range: {
            min: 1,
            max: 10000
          }
        }
      ],
      aliases: [
        'max-height'
      ],
      depends: [
        'fit=crop'
      ],
      url: 'https://docs.imgix.com/apis/url/size/max-height',
      short_description: 'Specifies the maximum height of the output image in pixels.'
    },
    'max-w': {
      display_name: 'maximum width',
      category: 'size',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          strict_range: {
            min: 1,
            max: 10000
          }
        }
      ],
      aliases: [
        'max-width'
      ],
      depends: [
        'fit=crop'
      ],
      url: 'https://docs.imgix.com/apis/url/size/max-width',
      short_description: 'Specifies the maximum width of the output image in pixels.'
    },
    'min-h': {
      display_name: 'minimum height',
      category: 'size',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          strict_range: {
            min: 1,
            max: 10000
          }
        }
      ],
      aliases: [
        'min-height'
      ],
      depends: [
        'fit=crop'
      ],
      url: 'https://docs.imgix.com/apis/url/size/min-height',
      short_description: 'Specifies the minimum height of the output image in pixels.'
    },
    'min-w': {
      display_name: 'minimum width',
      category: 'size',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          strict_range: {
            min: 1,
            max: 10000
          }
        }
      ],
      aliases: [
        'min-width'
      ],
      depends: [
        'fit=crop'
      ],
      url: 'https://docs.imgix.com/apis/url/size/min-width',
      short_description: 'Specifies the minimum width of the output image in pixels.'
    },
    monochrome: {
      display_name: 'monochrome',
      category: 'stylize',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'hex_color'
        },
        {
          type: 'color_keyword'
        }
      ],
      aliases: [
        'mono'
      ],
      url: 'https://docs.imgix.com/apis/url/stylize/monochrome',
      short_description: 'Applies a monochrome effect to the source image.'
    },
    nr: {
      display_name: 'noise reduction bound',
      category: 'noise-reduction',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: -100,
            max: 100
          }
        }
      ],
      default: 20,
      url: 'https://docs.imgix.com/apis/url/noise-reduction/nr',
      short_description: 'Reduces the noise in an image.'
    },
    nrs: {
      display_name: 'noise reduction sharpen',
      category: 'noise-reduction',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: -100,
            max: 100
          }
        }
      ],
      default: 20,
      url: 'https://docs.imgix.com/apis/url/noise-reduction/nrs',
      short_description: 'Provides a threshold by which to sharpen an image.'
    },
    orient: {
      display_name: 'orientation',
      category: 'rotation',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          possible_values: [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            90,
            180,
            270
          ]
        }
      ],
      aliases: [
        'or'
      ],
      url: 'https://docs.imgix.com/apis/url/rotation/orient',
      short_description: 'Changes the image orientation.'
    },
    pad: {
      display_name: 'padding',
      category: 'border-and-padding',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 0
          }
        }
      ],
      default: 0,
      url: 'https://docs.imgix.com/apis/url/border-and-padding/pad',
      short_description: 'Pads an image.'
    },
    page: {
      display_name: 'pdf page number',
      category: 'pdf',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 1
          }
        }
      ],
      default: 1,
      url: 'https://docs.imgix.com/apis/url/pdf-page-number',
      short_description: 'Selects a page from a PDF for display.'
    },
    palette: {
      display_name: 'color palette extraction',
      category: 'color-palette',
      available_in: [
        'url',
        'output'
      ],
      expects: [
        {
          type: 'string',
          possible_values: [
            'css',
            'json'
          ]
        }
      ],
      url: 'https://docs.imgix.com/apis/url/color-palette/palette',
      short_description: 'Specifies an output format for palette-extraction.'
    },
    prefix: {
      display_name: 'css prefix',
      category: 'color-palette',
      available_in: [
        'url',
        'output'
      ],
      expects: [
        {
          type: 'string'
        }
      ],
      default: 'image',
      depends: [
        'palette=css'
      ],
      url: 'https://docs.imgix.com/apis/url/color-palette/prefix',
      short_description: 'Specifies a CSS prefix for all classes in palette-extraction.'
    },
    px: {
      display_name: 'pixellate',
      category: 'stylize',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 0,
            max: 100
          }
        }
      ],
      default: 0,
      url: 'https://docs.imgix.com/apis/url/stylize/px',
      short_description: 'Applies a pixelation effect to an image.'
    },
    q: {
      display_name: 'output quality',
      category: 'format',
      available_in: [
        'url',
        'graph',
        'output'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 0,
            max: 100
          }
        }
      ],
      default: 75,
      depends: [
        'fm=jpg',
        'fm=pjpg',
        'fm=webp',
        'fm=jxr'
      ],
      url: 'https://docs.imgix.com/apis/url/format/q',
      short_description: 'Adjusts the quality of an output image.'
    },
    rect: {
      display_name: 'source rectangle region',
      category: 'size',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          0: [
            {
              type: 'integer',
              strict_range: {
                min: 0
              }
            },
            {
              type: 'string',
              possible_values: [
                'left',
                'center',
                'right'
              ]
            }
          ],
          1: [
            {
              type: 'integer',
              strict_range: {
                min: 0
              }
            },
            {
              type: 'string',
              possible_values: [
                'top',
                'middle',
                'bottom'
              ]
            }
          ],
          2: [
            {
              type: 'integer',
              strict_range: {
                min: 1
              }
            }
          ],
          3: [
            {
              type: 'integer',
              strict_range: {
                min: 1
              }
            }
          ],
          type: 'list'
        }
      ],
      url: 'https://docs.imgix.com/apis/url/size/rect',
      short_description: 'Crops an image to a specified rectangle.'
    },
    rot: {
      display_name: 'rotation',
      category: 'rotation',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'number',
          suggested_range: {
            min: 0,
            max: 359
          }
        }
      ],
      default: 0,
      url: 'https://docs.imgix.com/apis/url/rotation/rot',
      short_description: 'Rotates an image by a specified number of degrees.'
    },
    sat: {
      display_name: 'saturation',
      category: 'adjustment',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: -100,
            max: 100
          }
        }
      ],
      default: 0,
      url: 'https://docs.imgix.com/apis/url/adjustment/sat',
      short_description: 'Adjusts the saturation of an image.'
    },
    sepia: {
      display_name: 'sepia tone',
      category: 'stylize',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 0,
            max: 100
          }
        }
      ],
      default: 0,
      url: 'https://docs.imgix.com/apis/url/stylize/sepia',
      short_description: 'Applies a sepia effect to an image.'
    },
    shad: {
      display_name: 'shadow',
      category: 'adjustment',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'number',
          suggested_range: {
            min: 0,
            max: 100
          }
        }
      ],
      default: 0,
      url: 'https://docs.imgix.com/apis/url/adjustment/shad',
      short_description: 'Adjusts the highlights of the source image.'
    },
    sharp: {
      display_name: 'sharpen',
      category: 'adjustment',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'number',
          suggested_range: {
            min: 0,
            max: 100
          }
        }
      ],
      default: 0,
      url: 'https://docs.imgix.com/apis/url/adjustment/sharp',
      short_description: 'Adjusts the sharpness of the source image.'
    },
    'trim-color': {
      display_name: 'trim color',
      category: 'trim',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'hex_color'
        },
        {
          type: 'color_keyword'
        }
      ],
      aliases: [
        'trimcolor'
      ],
      depends: [
        'trim=color'
      ],
      url: 'https://docs.imgix.com/apis/url/trim/trim-color',
      short_description: 'Specifies a trim color on a trim operation.'
    },
    'trim-md': {
      display_name: 'trim mean difference',
      category: 'trim',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'number',
          suggested_range: {
            min: 0
          }
        }
      ],
      aliases: [
        'trimmd'
      ],
      default: 11,
      depends: [
        'trim=auto'
      ],
      url: 'https://docs.imgix.com/apis/url/trim/trim-md',
      short_description: 'Specifies the mean difference on a trim operation.'
    },
    'trim-pad': {
      display_name: 'trim padding',
      category: 'trim',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 0
          }
        }
      ],
      default: 0,
      aliases: [
        'trimpad'
      ],
      depends: [
        'trim'
      ],
      url: 'https://docs.imgix.com/apis/url/trim/trim-pad',
      short_description: 'Pads the area of the source image before trimming.'
    },
    'trim-sd': {
      display_name: 'trim standard deviation',
      category: 'trim',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'number',
          suggested_range: {
            min: 0
          }
        }
      ],
      aliases: [
        'trimsd'
      ],
      default: 10,
      depends: [
        'trim=auto'
      ],
      url: 'https://docs.imgix.com/apis/url/trim/trim-sd',
      short_description: 'Specifies the standard deviation on a trim operation.'
    },
    'trim-tol': {
      display_name: 'trim tolerance',
      category: 'trim',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'number',
          suggested_range: {
            min: 0
          }
        }
      ],
      aliases: [
        'trimtol'
      ],
      default: 0,
      depends: [
        'trim=color'
      ],
      url: 'https://docs.imgix.com/apis/url/trim/trim-tol',
      short_description: 'Specifies the tolerance on a trim operation.'
    },
    trim: {
      display_name: 'trim image',
      category: 'trim',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'string',
          possible_values: [
            'auto',
            'color'
          ]
        }
      ],
      url: 'https://docs.imgix.com/apis/url/trim/trim',
      short_description: 'Trims the source image.'
    },
    'txt-align': {
      display_name: 'text align',
      category: 'text',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'list',
          possible_values: [
            'top',
            'middle',
            'bottom',
            'left',
            'center',
            'right'
          ]
        }
      ],
      aliases: [
        'txtalign',
        'ta'
      ],
      depends: [
        'txt'
      ],
      url: 'https://docs.imgix.com/apis/url/text/txt-align',
      short_description: 'Sets the vertical and horizontal alignment of rendered text relative to the base image.'
    },
    'txt-clip': {
      display_name: 'text clipping mode',
      category: 'text',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'list',
          possible_values: [
            'start',
            'middle',
            'end',
            'ellipsis'
          ]
        }
      ],
      default: 'end',
      aliases: [
        'txtclip',
        'tcl'
      ],
      depends: [
        'txt'
      ],
      url: 'https://docs.imgix.com/apis/url/text/txt-clip',
      short_description: 'Sets the clipping properties of rendered text.'
    },
    'txt-color': {
      display_name: 'text color',
      category: 'text',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'hex_color'
        },
        {
          type: 'color_keyword'
        }
      ],
      aliases: [
        'txtcolor',
        'txt-clr',
        'txtclr',
        'tc'
      ],
      depends: [
        'txt'
      ],
      url: 'https://docs.imgix.com/apis/url/text/txt-color',
      short_description: 'Specifies the color of rendered text.'
    },
    'txt-fit': {
      display_name: 'text fit mode',
      category: 'text',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'string',
          possible_values: [
            'max'
          ]
        }
      ],
      aliases: [
        'txtfit'
      ],
      depends: [
        'txt'
      ],
      url: 'https://docs.imgix.com/apis/url/text/txt-fit',
      short_description: 'Specifies the fit approach for rendered text.'
    },
    'txt-font': {
      display_name: 'text font',
      category: 'text',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'font'
        }
      ],
      aliases: [
        'tf',
        'txtfont'
      ],
      depends: [
        'txt'
      ],
      url: 'https://docs.imgix.com/apis/url/text/txt-font',
      short_description: 'Selects a font for rendered text.'
    },
    'txt-lead': {
      display_name: 'text leading',
      category: 'typesetting',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 0
          }
        }
      ],
      aliases: [
        'txtlead'
      ],
      default: 0,
      depends: [
        'txt'
      ],
      url: 'https://docs.imgix.com/apis/url/typesetting/txt-lead',
      short_description: 'Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.'
    },
    'txt-lig': {
      display_name: 'text ligatures',
      category: 'text',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          possible_values: [
            0,
            1,
            2
          ]
        }
      ],
      aliases: [
        'txtlig'
      ],
      depends: [
        'txt'
      ],
      url: 'https://docs.imgix.com/apis/url/text/txt-lig',
      short_description: 'Controls the level of ligature substitution'
    },
    'txt-line-color': {
      display_name: 'text outline color',
      category: 'text',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'hex_color'
        },
        {
          type: 'color_keyword'
        }
      ],
      default: '#fff',
      aliases: [
        'txtlinecolor',
        'txt-line-clr',
        'txtlineclr'
      ],
      depends: [
        'txt',
        'txtline'
      ],
      url: 'https://docs.imgix.com/apis/url/text/txt-line-color',
      short_description: 'Specifies a text outline color.'
    },
    'txt-line': {
      display_name: 'text outline',
      category: 'text',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 0
          }
        }
      ],
      default: 0,
      aliases: [
        'txtline',
        'tl'
      ],
      depends: [
        'txt'
      ],
      url: 'https://docs.imgix.com/apis/url/text/txt-line',
      short_description: 'Outlines the rendered text with a specified color.'
    },
    'txt-pad': {
      display_name: 'text padding',
      category: 'text',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          default: 10,
          suggested_range: {
            min: 0
          }
        }
      ],
      aliases: [
        'txtpad',
        'tp'
      ],
      depends: [
        'txt'
      ],
      url: 'https://docs.imgix.com/apis/url/text/txt-pad',
      short_description: 'Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.'
    },
    'txt-shad': {
      display_name: 'text shadow',
      category: 'text',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'number',
          suggested_range: {
            min: 0,
            max: 10
          }
        }
      ],
      default: 0,
      aliases: [
        'txtshad',
        'tsh'
      ],
      depends: [
        'txt'
      ],
      url: 'https://docs.imgix.com/apis/url/text/txt-shad',
      short_description: 'Applies a shadow to rendered text.'
    },
    'txt-size': {
      display_name: 'text font size',
      category: 'text',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 0
          }
        }
      ],
      default: 12,
      aliases: [
        'tsz',
        'txtsize'
      ],
      depends: [
        'txt'
      ],
      url: 'https://docs.imgix.com/apis/url/text/txt-size',
      short_description: 'Sets the font size of rendered text.'
    },
    'txt-track': {
      display_name: 'text tracking',
      category: 'typesetting',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: -4
          }
        }
      ],
      default: 0,
      aliases: [
        'txttrack',
        'tt'
      ],
      depends: [
        'txt'
      ],
      url: 'https://docs.imgix.com/apis/url/typesetting/txt-track',
      short_description: 'Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.'
    },
    'txt-width': {
      display_name: 'text width',
      category: 'text',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: 0
          }
        }
      ],
      aliases: [
        'txtwidth'
      ],
      depends: [
        'txt'
      ],
      url: 'https://docs.imgix.com/apis/url/text/txt-width',
      short_description: 'Sets the width of rendered text.'
    },
    txt: {
      display_name: 'text string',
      category: 'text',
      available_in: [
        'url'
      ],
      expects: [
        {
          type: 'string'
        }
      ],
      aliases: [
        't'
      ],
      url: 'https://docs.imgix.com/apis/url/text/txt',
      short_description: 'Sets the text string to render.'
    },
    usm: {
      display_name: 'unsharp mask',
      category: 'adjustment',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: -100,
            max: 100
          }
        }
      ],
      default: 0,
      url: 'https://docs.imgix.com/apis/url/adjustment/usm',
      short_description: 'Sharpens the source image using an unsharp mask.'
    },
    usmrad: {
      display_name: 'unsharp mask radius',
      category: 'adjustment',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'number',
          suggested_range: {
            min: 0
          }
        }
      ],
      default: 2.5,
      depends: [
        'usm'
      ],
      url: 'https://docs.imgix.com/apis/url/adjustment/usmrad',
      short_description: 'Specifies the radius for an unsharp mask operation.'
    },
    vib: {
      display_name: 'vibrance',
      category: 'adjustment',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          suggested_range: {
            min: -100,
            max: 100
          }
        }
      ],
      default: 0,
      url: 'https://docs.imgix.com/apis/url/adjustment/vib',
      short_description: 'Adjusts the vibrance of an image.'
    },
    w: {
      display_name: 'image width',
      category: 'size',
      available_in: [
        'url',
        'graph'
      ],
      expects: [
        {
          type: 'integer',
          strict_range: {
            min: 2,
            max: 10000
          }
        },
        {
          type: 'unit_scalar',
          strict_range: {
            min: 0,
            max: 1
          }
        }
      ],
      url: 'https://docs.imgix.com/apis/url/size/w',
      short_description: 'Adjusts the width of the output image.'
    }
  },
  aliases: {
    blendalign: 'blend-align',
    ba: 'blend-align',
    blendalpha: 'blend-alpha',
    balph: 'blend-alpha',
    blendcrop: 'blend-crop',
    bc: 'blend-crop',
    blendfit: 'blend-fit',
    bf: 'blend-fit',
    blendh: 'blend-h',
    bh: 'blend-h',
    blendmode: 'blend-mode',
    bm: 'blend-mode',
    blendpad: 'blend-pad',
    bp: 'blend-pad',
    blendsize: 'blend-size',
    bs: 'blend-size',
    blendw: 'blend-w',
    bw: 'blend-w',
    blendx: 'blend-x',
    bx: 'blend-x',
    blendy: 'blend-y',
    by: 'blend-y',
    b: 'blend',
    fillcolor: 'fill-color',
    f: 'fit',
    inv: 'invert',
    ma: 'mark-align',
    markalign: 'mark-align',
    markalpha: 'mark-alpha',
    malph: 'mark-alpha',
    mb: 'mark-base',
    markbase: 'mark-base',
    mf: 'mark-fit',
    markfit: 'mark-fit',
    mh: 'mark-h',
    markh: 'mark-h',
    mp: 'mark-pad',
    markpad: 'mark-pad',
    ms: 'mark-scale',
    markscale: 'mark-scale',
    mw: 'mark-w',
    markw: 'mark-w',
    mx: 'mark-x',
    markx: 'mark-x',
    my: 'mark-y',
    marky: 'mark-y',
    m: 'mark',
    'max-height': 'max-h',
    'max-width': 'max-w',
    'min-height': 'min-h',
    'min-width': 'min-w',
    mono: 'monochrome',
    or: 'orient',
    trimcolor: 'trim-color',
    trimmd: 'trim-md',
    trimpad: 'trim-pad',
    trimsd: 'trim-sd',
    trimtol: 'trim-tol',
    txtalign: 'txt-align',
    ta: 'txt-align',
    txtclip: 'txt-clip',
    tcl: 'txt-clip',
    txtcolor: 'txt-color',
    'txt-clr': 'txt-color',
    txtclr: 'txt-color',
    tc: 'txt-color',
    txtfit: 'txt-fit',
    tf: 'txt-font',
    txtfont: 'txt-font',
    txtlead: 'txt-lead',
    txtlig: 'txt-lig',
    txtlinecolor: 'txt-line-color',
    'txt-line-clr': 'txt-line-color',
    txtlineclr: 'txt-line-color',
    txtline: 'txt-line',
    tl: 'txt-line',
    txtpad: 'txt-pad',
    tp: 'txt-pad',
    txtshad: 'txt-shad',
    tsh: 'txt-shad',
    tsz: 'txt-size',
    txtsize: 'txt-size',
    txttrack: 'txt-track',
    tt: 'txt-track',
    txtwidth: 'txt-width',
    t: 'txt'
  },
  categoryValues: [
    'adjustment',
    'animation',
    'auto',
    'blending',
    'border-and-padding',
    'color-palette',
    'expiration',
    'face-detection',
    'fill',
    'focalpoint-crop',
    'format',
    'mask',
    'misc',
    'noise-reduction',
    'pdf',
    'pixel-density',
    'rotation',
    'size',
    'stylize',
    'text',
    'typesetting',
    'trim',
    'watermark'
  ],
  colorKeywordValues: [
    'aliceblue',
    'antiquewhite',
    'aqua',
    'aquamarine',
    'azure',
    'beige',
    'bisque',
    'black',
    'blanchedalmond',
    'blue',
    'blueviolet',
    'brown',
    'burlywood',
    'cadetblue',
    'chartreuse',
    'chocolate',
    'coral',
    'cornflowerblue',
    'cornsilk',
    'crimson',
    'cyan',
    'darkblue',
    'darkcyan',
    'darkgoldenrod',
    'darkgray',
    'darkgreen',
    'darkgrey',
    'darkkhaki',
    'darkmagenta',
    'darkolivegreen',
    'darkorange',
    'darkorchid',
    'darkred',
    'darksalmon',
    'darkseagreen',
    'darkslateblue',
    'darkslategray',
    'darkslategrey',
    'darkturquoise',
    'darkviolet',
    'deeppink',
    'deepskyblue',
    'dimgray',
    'dimgrey',
    'dodgerblue',
    'firebrick',
    'floralwhite',
    'forestgreen',
    'fuchsia',
    'gainsboro',
    'ghostwhite',
    'gold',
    'goldenrod',
    'gray',
    'green',
    'greenyellow',
    'grey',
    'honeydew',
    'hotpink',
    'imgixorange',
    'imgixblue',
    'indianred',
    'indigo',
    'ivory',
    'khaki',
    'lavender',
    'lavenderblush',
    'lawngreen',
    'lemonchiffon',
    'lightblue',
    'lightcoral',
    'lightcyan',
    'lightgoldenrodyellow',
    'lightgray',
    'lightgreen',
    'lightgrey',
    'lightpink',
    'lightsalmon',
    'lightseagreen',
    'lightskyblue',
    'lightslategray',
    'lightslategrey',
    'lightsteelblue',
    'lightyellow',
    'lime',
    'limegreen',
    'linen',
    'magenta',
    'maroon',
    'mediumaquamarine',
    'mediumblue',
    'mediumorchid',
    'mediumpurple',
    'mediumseagreen',
    'mediumslateblue',
    'mediumspringgreen',
    'mediumturquoise',
    'mediumvioletred',
    'midnightblue',
    'mintcream',
    'mistyrose',
    'moccasin',
    'navajowhite',
    'navy',
    'oldlace',
    'olive',
    'olivedrab',
    'orange',
    'orangered',
    'orchid',
    'palegoldenrod',
    'palegreen',
    'paleturquoise',
    'palevioletred',
    'papayawhip',
    'peachpuff',
    'peru',
    'pink',
    'plum',
    'powderblue',
    'purple',
    'rebeccapurple',
    'red',
    'rosybrown',
    'royalblue',
    'saddlebrown',
    'salmon',
    'sandybrown',
    'seagreen',
    'seashell',
    'sienna',
    'silver',
    'skyblue',
    'slateblue',
    'slategray',
    'slategrey',
    'snow',
    'springgreen',
    'steelblue',
    'tan',
    'teal',
    'thistle',
    'tomato',
    'turquoise',
    'violet',
    'wheat',
    'white',
    'whitesmoke',
    'yellow',
    'yellowgreen'
  ],
  fontValues: [
    'serif',
    'sans-serif',
    'monospace',
    'cursive',
    'fantasy',
    'serif,bold',
    'sans-serif,bold',
    'monospace,bold',
    'fantasy,bold',
    'serif,italic',
    'sans-serif,italic',
    'monospace,italic',
    'serif,bold,italic',
    'sans-serif,bold,italic',
    'monospace,bold,italic',
    'American Typewriter',
    'American Typewriter Condensed',
    'American Typewriter Condensed Light',
    'American Typewriter Condensed,Bold',
    'American Typewriter Light',
    'American Typewriter,Bold',
    'AndaleMono',
    'Arial Narrow',
    'Arial Narrow,Bold',
    'Arial Narrow,BoldItalic',
    'Arial Narrow,Italic',
    'Arial Rounded MT,Bold',
    'Arial UnicodeMS',
    'Arial,BoldItalicMT',
    'Arial,BoldMT',
    'Arial,ItalicMT',
    'Arial-Black',
    'ArialMT',
    'Athelas,Bold',
    'Athelas,BoldItalic',
    'Athelas,Italic',
    'Athelas-Regular',
    'Avenir Next Condensed Demi,Bold',
    'Avenir Next Condensed Demi,BoldItalic',
    'Avenir Next Condensed Heavy',
    'Avenir Next Condensed Heavy,Italic',
    'Avenir Next Condensed Medium',
    'Avenir Next Condensed Medium,Italic',
    'Avenir Next Condensed Regular',
    'Avenir Next Condensed Ultra Light',
    'Avenir Next Condensed Ultra Light,Italic',
    'Avenir Next Condensed,Bold',
    'Avenir Next Condensed,BoldItalic',
    'Avenir Next Condensed,Italic',
    'Avenir Next Demi,Bold',
    'Avenir Next Demi,BoldItalic',
    'Avenir Next Heavy',
    'Avenir Next Heavy,Italic',
    'Avenir Next Medium',
    'Avenir Next Medium,Italic',
    'Avenir Next Regular',
    'Avenir Next Ultra Light',
    'Avenir Next Ultra Light,Italic',
    'Avenir Next,Bold',
    'Avenir Next,BoldItalic',
    'Avenir Next,Italic',
    'Avenir-Black',
    'Avenir-BlackOblique',
    'Avenir-Book',
    'Avenir-BookOblique',
    'Avenir-Heavy',
    'Avenir-HeavyOblique',
    'Avenir-Light',
    'Avenir-LightOblique',
    'Avenir-Medium',
    'Avenir-MediumOblique',
    'Avenir-Oblique',
    'Avenir-Roman',
    'Baskerville',
    'Baskerville,Bold',
    'Baskerville,BoldItalic',
    'Baskerville,Italic',
    'BigCaslon-Medium',
    'BrushScriptMT',
    'Chalkboard',
    'Chalkboard SE Light',
    'Chalkboard SE Regular',
    'Chalkboard SE,Bold',
    'Chalkboard,Bold',
    'Chalkduster',
    'CharcoalCY',
    'Charter Black,Italic',
    'Charter,Bold',
    'Charter,BoldItalic',
    'Charter,Italic',
    'Charter-Black',
    'Charter-Roman',
    'Cochin',
    'Cochin,Bold',
    'Cochin,BoldItalic',
    'Cochin,Italic',
    'Comic Sans MS,Bold',
    'ComicSansMS',
    'Copperplate',
    'Copperplate,Bold',
    'Copperplate-Light',
    'Courier',
    'Courier New,Bold',
    'Courier New,BoldItalic',
    'Courier New,Italic',
    'Courier,Bold',
    'Courier-Oblique',
    'CourierNewPSMT',
    'DIN Alternate,Bold',
    'DIN Condensed,Bold',
    'Didot',
    'Didot,Bold',
    'Didot,Italic',
    'Futura Medium,Italic',
    'Futura-CondensedMedium',
    'Futura-Medium',
    'Geneva',
    'GenevaCyr',
    'Georgia',
    'Georgia,Bold',
    'Georgia,BoldItalic',
    'Georgia,Italic',
    'Gill Sans',
    'Gill Sans Light,Italic',
    'Gill Sans,Bold',
    'Gill Sans,BoldItalic',
    'Gill Sans,UltraBold',
    'GillSans,Italic',
    'GillSans-Light',
    'Helvetica',
    'Helvetica CY,Bold',
    'Helvetica Neue',
    'Helvetica Neue Condensed Black',
    'Helvetica Neue Condensed,Bold',
    'Helvetica Neue Light',
    'Helvetica Neue Light,Italic',
    'Helvetica Neue Medium',
    'Helvetica Neue Medium,Italic',
    'Helvetica Neue Thin',
    'Helvetica Neue Thin,Italic',
    'Helvetica Neue UltraLight',
    'Helvetica Neue UltraLight,Italic',
    'Helvetica Neue,Bold',
    'Helvetica Neue,BoldItalic',
    'Helvetica Neue,Italic',
    'Helvetica,Bold',
    'Helvetica-Light',
    'Helvetica-LightOblique',
    'Helvetica-Oblique',
    'HelveticaCY-Oblique',
    'HelveticaCY-Plain',
    'Herculanum',
    'Hoefler Text Black,Italic',
    'Hoefler Text,Italic',
    'HoeflerText-Black',
    'HoeflerText-Ornaments',
    'HoeflerText-Regular',
    'Impact',
    'Iowan Old Style Black,Italic',
    'Iowan Old Style,Bold',
    'Iowan Old Style,BoldItalic',
    'Iowan Old Style,Italic',
    'IowanOldStyle-Black',
    'IowanOldStyle-Roman',
    'IowanOldStyle-Titling',
    'Lucida Grande',
    'Lucida Grande,Bold',
    'Marion,Bold',
    'Marion,Italic',
    'Marion-Regular',
    'Marker Felt Thin',
    'Marker Felt Wide',
    'Menlo,Bold',
    'Menlo,BoldItalic',
    'Menlo,Italic',
    'Menlo-Regular',
    'Monaco',
    'Noteworthy,Bold',
    'Noteworthy-Light',
    'Optima,Bold',
    'Optima,BoldItalic',
    'Optima,Italic',
    'Optima-ExtraBlack',
    'Optima-Regular',
    'PT Mono,Bold',
    'PT Sans Caption,Bold',
    'PT Sans Narrow,Bold',
    'PT Sans,Bold',
    'PT Sans,BoldItalic',
    'PT Sans,Italic',
    'PT Serif Caption,Italic',
    'PT Serif,Bold',
    'PT Serif,BoldItalic',
    'PT Serif,Italic',
    'PTMono-Regular',
    'PTSans-Caption',
    'PTSans-Narrow',
    'PTSans-Regular',
    'PTSerif-Caption',
    'PTSerif-Regular',
    'Palatino,Bold',
    'Palatino,BoldItalic',
    'Palatino,Italic',
    'Palatino-Roman',
    'Papyrus',
    'Papyrus-Condensed',
    'PlantagenetCherokee',
    'STBaoli-SC-Regular',
    'STYuanti-SC-Light',
    'STYuanti-SC-Regular',
    'SavoyeLetPlain',
    'Seravek',
    'Seravek ExtraLight, Italic',
    'Seravek Light,Italic',
    'Seravek Medium,Italic',
    'Seravek,Bold',
    'Seravek,BoldItalic',
    'Seravek,Italic',
    'Seravek-ExtraLight',
    'Seravek-Light',
    'Seravek-Medium',
    'Skia-Regular',
    'Skia-Regular_Black',
    'Skia-Regular_Black-Condensed',
    'Skia-Regular_Black-Extended',
    'Skia-Regular_Condensed',
    'Skia-Regular_Extended',
    'Skia-Regular_Light',
    'Skia-Regular_Light-Condensed',
    'Skia-Regular_Light-Extended',
    'Snell Roundhand,Bold',
    'SnellRoundhand',
    'SnellRoundhand-Black',
    'Superclarendon Black,Italic',
    'Superclarendon Light,Italic',
    'Superclarendon,Bold',
    'Superclarendon,BoldItalic',
    'Superclarendon,Italic',
    'Superclarendon-Black',
    'Superclarendon-Light',
    'Superclarendon-Regular',
    'Tahoma',
    'Tahoma,Bold',
    'Times New Roman,Bold',
    'Times New Roman,BoldItalic',
    'Times New Roman,Italic',
    'Times,Bold',
    'Times,BoldItalic',
    'Times,Italic',
    'Times-Roman',
    'TimesNewRomanPSMT',
    'Trebuchet MS,Bold',
    'Trebuchet MS,BoldItalic',
    'Trebuchet MS,Italic',
    'TrebuchetMS',
    'Verdana',
    'Verdana,Bold',
    'Verdana,BoldItalic',
    'Verdana,Italic',
    'Waseem',
    'WaseemLight',
    'Webdings',
    'Wingdings-Regular',
    'Wingdings2',
    'Wingdings3',
    'Yuanti SC,Bold',
    'YuppySC-Regular',
    'Zapf Dingbats',
    'Zapfino'
  ]
}
