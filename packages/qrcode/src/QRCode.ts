import sf, { IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';
import { IQRCodeOptions } from './types';
import { QRCodeR } from './vendor/qrcode';

export class QRCode extends sf.core.BaseDOMConstructor {
  static readonly spiralFrameworkName: string = 'qrcode';

  static readonly spiralFrameworkCssName: string = 'js-sf-qrcode';

  static readonly defaultOptions: IQRCodeOptions = {
    size: 200,
    type: 'svg',
    value: '',
    ecLevel: 'M',
    bgColor: '#FFFFFF',
    fgColor: '#000000',
    logoUrl: '',
    logoHeight: 0,
    logoWidth: 0,
    logoX: 0,
    logoY: 0,
    logoMargin: -1,
  };

  public options: IQRCodeOptions = { ...QRCode.defaultOptions };

  public readonly name = QRCode.spiralFrameworkName;

  public readonly optionsToGrab: { [option: string]: IOptionToGrab } = {
    type: {
      value: QRCode.defaultOptions.type,
      domAttr: 'data-type',
    },
    size: {
      value: QRCode.defaultOptions.size,
      domAttr: 'data-size',
    },
    value: {
      value: QRCode.defaultOptions.value,
      domAttr: 'data-value',
    },
    ecLevel: {
      value: QRCode.defaultOptions.ecLevel,
      domAttr: 'data-ec-level',
    },
    bgColor: {
      value: QRCode.defaultOptions.bgColor,
      domAttr: 'data-bg-color',
    },
    fgColor: {
      value: QRCode.defaultOptions.fgColor,
      domAttr: 'data-fg-color',
    },
    logoUrl: {
      value: QRCode.defaultOptions.logoUrl,
      domAttr: 'data-logo-url',
    },
    logoWidth: {
      value: QRCode.defaultOptions.logoWidth,
      domAttr: 'data-logo-width',
    },
    logoHeight: {
      value: QRCode.defaultOptions.logoHeight,
      domAttr: 'data-logo-height',
    },
    logoX: {
      value: QRCode.defaultOptions.logoX,
      domAttr: 'data-logo-x',
    },
    logoY: {
      value: QRCode.defaultOptions.logoY,
      domAttr: 'data-logo-y',
    },
    logoMargin: {
      value: QRCode.defaultOptions.logoMargin,
      domAttr: 'data-logo-margin',
    },
  };

  constructor(ssf: ISpiralFramework, node: Element, options: IQRCodeOptions) {
    super();
    this.init(ssf, node, options);
    this.options = {
      ...QRCode.defaultOptions,
      ...this.options,
    };
    this.render();
  }

  render() {
    const { value, ...options } = this.options;
    QRCodeR(this.node, {
      size: options.size,
      imageSettings: options.logoUrl ? {
        src: options.logoUrl,
        height: options.logoHeight,
        width: options.logoWidth,
        x: options.logoX,
        y: options.logoY,
        excavate: options.logoMargin >= 0 ? {
          x: options.logoX - options.logoMargin,
          y: options.logoY - options.logoMargin,
          w: options.logoX + options.logoWidth + options.logoMargin,
          h: options.logoY + options.logoHeight + options.logoMargin,
        } : undefined,
      } : undefined,
      renderAs: options.type,
      bgColor: options.bgColor,
      fgColor: options.fgColor,
      includeMargin: false,
      level: options.ecLevel,
      style: {},
      value,
    });
  }
}
