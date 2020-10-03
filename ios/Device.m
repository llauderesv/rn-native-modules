//
//  Device.m
//  NativeModules
//
//  Created by Vince on 10/3/20.
//

#import "Device.h"
#import <React/RCTLog.h>
#import <UIKit/UIKit.h>

@implementation Device

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(getDeviceName:(RCTResponseSenderBlock)callback){
  @try {
    NSString *deviceName = [[UIDevice currentDevice] name];
    callback(@[[NSNull null], deviceName]);
  }
  @catch(NSException *exception) {
    callback(@[exception.reason, [NSNull null]]);
  }
}

RCT_EXPORT_METHOD(logEvent:(NSString *)log) {
  RCTLogInfo(@"Log event: %@", log);
}

@end
