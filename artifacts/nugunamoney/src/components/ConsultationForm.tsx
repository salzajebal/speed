import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "이름을 정확히 입력해주세요.",
  }),
  phone1: z.string().length(3),
  phone2: z.string().min(3).max(4),
  phone3: z.string().length(4),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집·이용에 동의해야 합니다.",
  }),
});

export default function ConsultationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone1: "010",
      phone2: "",
      phone3: "",
      agreeToTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "상담 신청이 완료되었습니다!",
        description: "평균 3분 이내 연락드리겠습니다.",
        className: "bg-green-50 border-green-200 text-green-900",
        duration: 5000,
      });
      form.reset();
    }, 1000);
  }

  return (
    <Card className="w-full shadow-xl border-0 overflow-hidden bg-white/95 backdrop-blur">
      <div className="bg-primary/5 p-6 text-center border-b border-primary/10">
        <h3 className="text-xl font-bold text-foreground">1분 안심 상담신청</h3>
        <p className="text-sm text-muted-foreground mt-1">신용조회 기록이 남지 않습니다</p>
      </div>
      <CardContent className="p-6 md:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/80 font-medium">성함</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="홍길동" 
                      className="bg-muted/30 border-muted/50 focus:bg-white h-12 text-lg" 
                      data-testid="input-name"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">연락처</label>
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="phone1"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input 
                          maxLength={3} 
                          className="bg-muted/30 border-muted/50 focus:bg-white h-12 text-center text-lg px-1" 
                          data-testid="input-phone1"
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-center text-muted-foreground">-</div>
                <FormField
                  control={form.control}
                  name="phone2"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input 
                          maxLength={4} 
                          className="bg-muted/30 border-muted/50 focus:bg-white h-12 text-center text-lg px-1" 
                          data-testid="input-phone2"
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-center text-muted-foreground">-</div>
                <FormField
                  control={form.control}
                  name="phone3"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input 
                          maxLength={4} 
                          className="bg-muted/30 border-muted/50 focus:bg-white h-12 text-center text-lg px-1" 
                          data-testid="input-phone3"
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              {form.formState.errors.phone1 || form.formState.errors.phone2 || form.formState.errors.phone3 ? (
                <p className="text-[0.8rem] font-medium text-destructive">올바른 연락처를 입력해주세요.</p>
              ) : null}
            </div>

            <FormField
              control={form.control}
              name="agreeToTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 bg-muted/20 rounded-lg border border-muted/30">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-0.5 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      data-testid="checkbox-terms"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm font-medium cursor-pointer">
                      개인정보 수집·이용 동의
                    </FormLabel>
                    <p className="text-xs text-muted-foreground">
                      상담 목적 외에는 절대 사용되지 않습니다.
                    </p>
                  </div>
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full h-14 text-lg font-bold rounded-xl shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5" 
              disabled={isSubmitting}
              data-testid="button-submit-consultation"
            >
              {isSubmitting ? "신청 중..." : "무료 상담 신청하기"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
