using Aprillz.MewUI;
using Aprillz.MewUI.Controls;

// <landing:hello>
var window = new Window()
    .Title("Hello MewUI")
    .Resizable(520, 360)
    .Padding(12)
    .Content(
        new StackPanel()
            .Spacing(8)
            .Children(
                new Label()
                    .Text("Hello, Aprillz.MewUI")
                    .FontSize(18)
                    .Bold(),
                new Button()
                    .Content("Exit")
                    .OnClick(Application.Shutdown)));

Application.Run(window);
// </landing:hello>
