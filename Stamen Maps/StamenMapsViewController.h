//
//  StamenMapsViewController.h
//  Stamen Maps
//
//  Created by Zach Williams on 4/28/12.
//  Copyright (c) 2012 Zach Williams. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface StamenMapsViewController : UIViewController <UIWebViewDelegate>

@property (weak, nonatomic) IBOutlet UIWebView *webView;

@end
