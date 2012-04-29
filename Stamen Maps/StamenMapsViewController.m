//
//  StamenMapsViewController.m
//  Stamen Maps
//
//  Created by Zach Williams on 4/28/12.
//  Copyright (c) 2012 Zach Williams. All rights reserved.
//

#import "StamenMapsViewController.h"

@interface StamenMapsViewController ()

@end

@implementation StamenMapsViewController
@synthesize webView;

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view.
    webView.delegate = self;
    NSString *stamen = @"http://maps.stamen.com/watercolor/#11/32.8156/-97.1507";
    NSString *_stamen = @"http://maps.stamen.com/watercolor/#13/37.7706/-122.3782";
    NSURLRequest *request = [NSURLRequest requestWithURL:[NSURL URLWithString:stamen]];
    [webView loadRequest:request];
}

- (void)webViewDidFinishLoad:(UIWebView *)view
{
    // Hide certain elements from the UIWebView screen.
    NSString *file = [[NSBundle mainBundle] pathForResource:@"stamen" ofType:@"js"];
    NSString *js = [[NSString alloc] initWithContentsOfFile:file
                                                   encoding:NSUTF8StringEncoding
                                                      error:nil];
    [view stringByEvaluatingJavaScriptFromString:js];
}

- (void)viewDidUnload
{
    [self setWebView:nil];
    [super viewDidUnload];
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    return UIInterfaceOrientationIsLandscape(interfaceOrientation);
}

@end
