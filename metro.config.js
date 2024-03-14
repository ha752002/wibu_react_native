import {getDefaultConfig, mergeConfig} from '@react-native/metro-config';
import {resolve} from 'path';

import {generate} from '@storybook/react-native/scripts/generate';

generate({
  configPath: resolve(__dirname, './.ondevice'),
});

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import("metro-config").MetroConfig}
 */
const config = {
  transformer: {
    unstable_allowRequireContext: true,
  },
  resolver: {
    resolveRequest: (context, moduleName, platform) => {
      const defaultResolveResult = context.resolveRequest(
        context,
        moduleName,
        platform,
      );

      if (
        process.env.STORYBOOK_ENABLED !== 'true' &&
        defaultResolveResult?.filePath?.includes?.('.ondevice/')
      ) {
        return {
          type: 'empty',
        };
      }

      return defaultResolveResult;
    },
  },
};

export default mergeConfig(getDefaultConfig(__dirname), config);
